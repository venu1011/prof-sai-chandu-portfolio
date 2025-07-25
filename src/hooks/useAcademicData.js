import { useState, useMemo } from 'react';
import { academicData, contactData, eNotesData, searchENotes, getENotesBySubject } from '../data/academicData';

export const useAcademicData = () => {
  return {
    profile: academicData.profile,
    qualifications: academicData.qualifications,
    experience: academicData.experience,
    teachingInterests: academicData.teachingInterests,
    achievements: academicData.achievements,
    stats: academicData.stats,
    contact: contactData
  };
};

export const useENotes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [sortBy, setSortBy] = useState('downloads'); // downloads, rating, date

  const filteredAndSortedNotes = useMemo(() => {
    let notes = eNotesData;

    // Filter by search term
    if (searchTerm) {
      notes = searchENotes(searchTerm);
    }

    // Filter by subject
    if (selectedSubject !== 'all') {
      notes = getENotesBySubject(selectedSubject);
    }

    // Sort notes
    notes = [...notes].sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'date':
          return new Date(b.dateUpdated) - new Date(a.dateUpdated);
        case 'downloads':
        default:
          return b.downloads - a.downloads;
      }
    });

    return notes;
  }, [searchTerm, selectedSubject, sortBy]);

  const subjects = useMemo(() => {
    const subjectSet = new Set(eNotesData.map(note => note.subject));
    return ['all', ...Array.from(subjectSet)];
  }, []);

  const totalDownloads = useMemo(() => {
    return eNotesData.reduce((total, note) => total + note.downloads, 0);
  }, []);

  const averageRating = useMemo(() => {
    const totalRating = eNotesData.reduce((total, note) => total + note.rating, 0);
    return (totalRating / eNotesData.length).toFixed(1);
  }, []);

  const handleDownload = (note) => {
    // Track download analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'download', {
        'note_id': note.id,
        'note_title': note.title,
        'note_subject': note.subject
      });
    }

    // Open Google Drive link
    window.open(note.driveLink, '_blank');
  };

  return {
    notes: filteredAndSortedNotes,
    searchTerm,
    setSearchTerm,
    selectedSubject,
    setSelectedSubject,
    sortBy,
    setSortBy,
    subjects,
    totalDownloads,
    averageRating,
    totalNotes: eNotesData.length,
    handleDownload
  };
};

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'subject':
        return value.trim().length < 3 ? 'Subject must be at least 3 characters' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, just log the data and show success
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Track form submission
      if (typeof gtag !== 'undefined') {
        gtag('event', 'contact_form_submit', {
          'subject': formData.subject
        });
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
    validateField
  };
};

export const useScrollToSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return { scrollToSection, scrollToTop };
};

// YouTube Channel Data Hook
export const useYouTubeChannel = () => {
  const channelData = {
    channelName: "Professor Sai Chandu's Daughter",
    channelType: "Comedy & Lifestyle Vlogs",
    channelDescription: "Fun lifestyle vlogs, comedy sketches, and daily life content. Follow our family's entertaining journey with humor and heart!",
    channelUrl: "https://youtube.com/@channel-name", // Replace with actual channel URL
    subscriberCount: "12.5K", // Update with actual count
    videoCount: "85+", // Update with actual count
    featuredVideos: [
      {
        id: 1,
        title: "Daily Life Comedy Sketches",
        description: "Hilarious moments from everyday life that will make you laugh",
        thumbnail: "https://images.unsplash.com/photo-1522075469751-3847aa387f60?w=400&h=225&fit=crop&auto=format",
        duration: "8:45",
        views: "15.2K",
        likes: "1.8K",
        videoUrl: "https://youtube.com/watch?v=example1",
        category: "Comedy",
        uploadDate: "3 days ago"
      },
      {
        id: 2,
        title: "Lifestyle & Fashion Vlogs",
        description: "My daily routines, fashion hauls, and lifestyle tips",
        thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=225&fit=crop&auto=format",
        duration: "12:30",
        views: "8.7K",
        likes: "945",
        videoUrl: "https://youtube.com/watch?v=example2",
        category: "Lifestyle",
        uploadDate: "1 week ago"
      },
      {
        id: 3,
        title: "Family Fun & Behind Scenes",
        description: "Fun family moments and behind-the-scenes content",
        thumbnail: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=225&fit=crop&auto=format",
        duration: "10:15",
        views: "22.1K",
        likes: "2.3K",
        videoUrl: "https://youtube.com/watch?v=example3",
        category: "Family",
        uploadDate: "5 days ago"
      },
      {
        id: 4,
        title: "Comedy Reactions & Reviews",
        description: "Funny reactions to trending topics and movie reviews",
        thumbnail: "https://images.unsplash.com/photo-1594736797933-d0b22e8df094?w=400&h=225&fit=crop&auto=format",
        duration: "14:20",
        views: "18.5K",
        likes: "1.6K",
        videoUrl: "https://youtube.com/watch?v=example4",
        category: "Entertainment",
        uploadDate: "2 weeks ago"
      }
    ],
    categories: ["Comedy", "Lifestyle", "Family", "Entertainment"],
    uploadSchedule: "New videos every Tuesday & Friday!"
  };

  const handleSubscribe = () => {
    window.open(channelData.channelUrl, '_blank');
  };

  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  const getVideosByCategory = (category) => {
    return channelData.featuredVideos.filter(video => video.category === category);
  };

  return {
    channelData,
    handleSubscribe,
    handleVideoClick,
    getVideosByCategory
  };
};
