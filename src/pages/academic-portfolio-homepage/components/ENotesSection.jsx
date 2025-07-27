import React, { useState, useMemo } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ENotesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Your comprehensive e-notes collection
  const allENotesData = [
    {
      id: 1,
      title: "Knowledge Management By Professor Sai Chandu",
      description: "Comprehensive guide on knowledge creation, sharing, and organizational learning frameworks.",
      subject: "Management",
      category: "Management",
      pages: 150,
      downloads: 1240,
      rating: 4.8,
      driveLink: "https://drive.google.com/file/d/1icciGwWEsICUSrwozcJXWp20d_ECWP0F/view?usp=share_link",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
      tags: ["Knowledge", "Management", "Organizational Learning"],
      isNew: true
    },
    {
      id: 2,
      title: "Management Information System",
      description: "Complete MIS course covering database systems, decision support systems, and business applications.",
      subject: "MIS",
      category: "Information Systems",
      pages: 220,
      downloads: 980,
      rating: 4.9,
      driveLink: "https://drive.google.com/file/d/1MdtEUIAVsaIo3lPkscouBRJ_bNiD59Ww/view?usp=sharing",
      thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop&auto=format",
      tags: ["MIS", "Database", "Technology"],
      isNew: false
    },
    {
      id: 3,
      title: "MIS QUESTION BANK R20",
      description: "Complete question bank for R20 regulation MIS subject with previous year questions.",
      subject: "MIS",
      category: "Question Banks",
      pages: 85,
      downloads: 756,
      rating: 4.7,
      driveLink: "https://drive.google.com/file/d/1oKvxSugeoDR1zYa2kPlGidOEtAXiuzDd/view?usp=drive_link",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&auto=format",
      tags: ["Question Bank", "R20", "MIS"],
      isNew: false
    },
    {
      id: 4,
      title: "OPERATIONS MANAGEMENT",
      description: "Fundamentals of managing production systems, quality control, supply chain logistics, and operations strategy.",
      subject: "Operations",
      category: "Operations",
      pages: 180,
      downloads: 1050,
      rating: 4.7,
      driveLink: "https://drive.google.com/file/d/15PCqVvGfcCKGGgu3iSxfhcqoiFE0Qsh7/view?usp=sharing",
      thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format",
      tags: ["Operations", "Supply Chain", "Production"],
      isNew: false
    },
    {
      id: 5,
      title: "GBM-all-UNITS-by professor Sai Chandu",
      description: "Complete Global Business Management notes covering all units with practical examples.",
      subject: "GBM",
      category: "Management",
      pages: 165,
      downloads: 890,
      rating: 4.6,
      driveLink: "https://drive.google.com/file/d/189Gm-j5xCvL09itDWcssNrK-pbjZyepN/view?usp=sharing",
      thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop&auto=format",
      tags: ["Global Business", "Management", "International"],
      isNew: true
    },
    {
      id: 6,
      title: "Knowledge Management",
      description: "Advanced knowledge management concepts and implementation strategies.",
      subject: "Management",
      category: "Management",
      pages: 140,
      downloads: 720,
      rating: 4.5,
      driveLink: "https://drive.google.com/file/d/1G58IfRlxJg2W5qqX5gfRV-smGw9YByT6/view?usp=sharing",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
      tags: ["Knowledge", "Management", "Strategy"],
      isNew: false
    },
    {
      id: 7,
      title: "Case Studies +Important questions + assignment que",
      description: "Collection of case studies, important questions, and assignments for management subjects.",
      subject: "Management",
      category: "Question Banks",
      pages: 95,
      downloads: 654,
      rating: 4.5,
      driveLink: "https://drive.google.com/file/d/10W65pca1gxZC3uoFZLyPM3qLDEpcXwXl/view?usp=sharing",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&auto=format",
      tags: ["Case Studies", "Questions", "Assignments"],
      isNew: false
    },
    {
      id: 8,
      title: "Case studies+Important questions + assignment que",
      description: "Additional collection of case studies and important questions for various subjects.",
      subject: "General",
      category: "Question Banks",
      pages: 88,
      downloads: 543,
      rating: 4.4,
      driveLink: "https://drive.google.com/file/d/1_WOZVWtBnbWInhve3c1x8_fw2brK7hEB/view?usp=sharing",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&auto=format",
      tags: ["Case Studies", "Questions", "General"],
      isNew: false
    },
    {
      id: 9,
      title: "Industry Analysis Report",
      description: "Detailed industry analysis methodologies and practical report writing guidelines.",
      subject: "Research",
      category: "Research",
      pages: 120,
      downloads: 432,
      rating: 4.4,
      driveLink: "https://drive.google.com/open?id=1DBt3TJK99riSSXxiIJpteM1TiZmJHgp6",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
      tags: ["Industry Analysis", "Research", "Reports"],
      isNew: false
    },
    {
      id: 10,
      title: "16MB716 ENTREPRENEURSHIP Development Notes",
      description: "Comprehensive entrepreneurship development guide with case studies and practical insights.",
      subject: "Entrepreneurship",
      category: "Entrepreneurship",
      pages: 210,
      downloads: 1120,
      rating: 4.9,
      driveLink: "https://drive.google.com/open?id=1j90uUZmmbGaWuqxaajnSwp05B9JHCPM1",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&auto=format",
      tags: ["Entrepreneurship", "Startups", "Innovation"],
      isNew: true
    },
    {
      id: 11,
      title: "Q&A QUESTION BANK ED R20",
      description: "Entrepreneurship Development question bank for R20 regulation with model answers.",
      subject: "Entrepreneurship",
      category: "Question Banks",
      pages: 78,
      downloads: 567,
      rating: 4.6,
      driveLink: "https://drive.google.com/open?id=0B1rDn95s6e78OFg0c0ltWmNtdkk",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&auto=format",
      tags: ["Question Bank", "Entrepreneurship", "R20"],
      isNew: false
    },
    {
      id: 12,
      title: "ME- unit one",
      description: "Mechanical Engineering unit one comprehensive notes and concepts.",
      subject: "Mechanical Engineering",
      category: "Engineering",
      pages: 65,
      downloads: 234,
      rating: 4.3,
      driveLink: "https://drive.google.com/file/d/1kttKqbDgX4iB3sj_Ak3kx4P1V-SzsNdC/view?usp=sharing",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&auto=format",
      tags: ["Mechanical", "Engineering", "Unit 1"],
      isNew: false
    },
    {
      id: 13,
      title: "OPERATION MANAGEMENT",
      description: "Operations management concepts, strategies, and practical applications.",
      subject: "Operations",
      category: "Operations",
      pages: 175,
      downloads: 890,
      rating: 4.7,
      driveLink: "https://drive.google.com/file/d/1Q2kDbSLzzs7Md47cIH4cBI2A1eMPR7D4/view?usp=drive_link",
      thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format",
      tags: ["Operations", "Management", "Strategy"],
      isNew: false
    },
    {
      id: 14,
      title: "HRM",
      description: "Complete Human Resource Management notes covering recruitment, training, and development.",
      subject: "HRM",
      category: "Human Resources",
      pages: 165,
      downloads: 890,
      rating: 4.6,
      driveLink: "https://drive.google.com/open?id=0B1rDn95s6e78ZGlEODd3MUlPRUE",
      thumbnail: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop&auto=format",
      tags: ["HRM", "Recruitment", "Training"],
      isNew: false
    },
    {
      id: 15,
      title: "HRP unit-III",
      description: "Human Resource Planning unit 3 detailed notes and concepts.",
      subject: "HRM",
      category: "Human Resources",
      pages: 45,
      downloads: 345,
      rating: 4.4,
      driveLink: "https://drive.google.com/open?id=0B1rDn95s6e78alNGWUhsczRteTQ",
      thumbnail: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop&auto=format",
      tags: ["HRP", "Unit 3", "Planning"],
      isNew: false
    },
    {
      id: 16,
      title: "operational research",
      description: "Operational research methods, linear programming, and optimization techniques.",
      subject: "Operations Research",
      category: "Research",
      pages: 155,
      downloads: 567,
      rating: 4.5,
      driveLink: "https://drive.google.com/open?id=0B1rDn95s6e78YlFkVmJoWFIyWlU",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      tags: ["Operations Research", "Optimization", "Linear Programming"],
      isNew: false
    },
    {
      id: 17,
      title: "Business simulation lab",
      description: "Business simulation laboratory exercises and practical applications.",
      subject: "Business",
      category: "Laboratory",
      pages: 78,
      downloads: 234,
      rating: 4.2,
      driveLink: "https://drive.google.com/file/d/0B1rDn95s6e78enZMb3NxNFlTZTA/view?usp=sharing",
      thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop&auto=format",
      tags: ["Business", "Simulation", "Laboratory"],
      isNew: false
    },
    {
      id: 18,
      title: "ENTREPRENEURSHIP DEVELOPMENT BY PROF SAI CHANDU . K",
      description: "Advanced entrepreneurship development concepts and case studies.",
      subject: "Entrepreneurship",
      category: "Entrepreneurship",
      pages: 195,
      downloads: 1050,
      rating: 4.8,
      driveLink: "https://drive.google.com/open?id=0B1rDn95s6e78YjlSc3JpbU81cGM",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&auto=format",
      tags: ["Entrepreneurship", "Development", "Advanced"],
      isNew: true
    },
    {
      id: 19,
      title: "Intellectual property rights",
      description: "Comprehensive guide to intellectual property rights, patents, and copyrights.",
      subject: "Law",
      category: "Legal",
      pages: 125,
      downloads: 456,
      rating: 4.5,
      driveLink: "https://drive.google.com/open?id=0B1rDn95s6e78and5VHktY2V4bHM",
      thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&auto=format",
      tags: ["IPR", "Patents", "Legal"],
      isNew: false
    },
    {
      id: 20,
      title: "HVPE by professor Sai Chandu",
      description: "Human Values and Professional Ethics comprehensive study material.",
      subject: "Ethics",
      category: "Ethics",
      pages: 110,
      downloads: 678,
      rating: 4.6,
      driveLink: "https://blogger.googleusercontent.com/img/a/AVvXsEi9XjmhJdnPVSpTo0eAn7E9SZrYAj5VDFl02M0gaJfZPeU2TvoeqmZ5n1pBb4QApVSfWDl0hmcCfCs2BCnNcTsr4P852eSNqRRsLQcYSEkJ4GMKYaRvfDB_wbSUfMVT6qOwW5eGKGEfD1x99I8h0VHuUjSEFWr4arH33bVyb-XsRHhyl0Ejm2_9YCrvzw=s1748",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&auto=format",
      tags: ["Ethics", "Values", "Professional"],
      isNew: false
    },
    {
      id: 21,
      title: "MEFA by Professor Sai chandu K",
      description: "Managerial Economics and Financial Analysis comprehensive study material.",
      subject: "Economics",
      category: "Economics",
      pages: 180,
      downloads: 654,
      rating: 4.7,
      driveLink: "https://drive.google.com/file/d/1xxIbh6ILYvQDljt9AUyT8RGuljdUWzPD/view?usp=share_link",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format",
      tags: ["MEFA", "Economics", "Finance"],
      isNew: false
    },
    {
      id: 22,
      title: "SCM SYLLABUS",
      description: "Supply Chain Management syllabus and course structure overview.",
      subject: "SCM",
      category: "Supply Chain",
      pages: 25,
      downloads: 234,
      rating: 4.2,
      driveLink: "https://drive.google.com/file/d/1ZwWKgT3k7_EJaWn03xB1xzC4QxCQJc90/view?usp=sharing",
      thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format",
      tags: ["SCM", "Syllabus", "Supply Chain"],
      isNew: false
    },
    {
      id: 23,
      title: "(18HS0860) SUPPLY CHAIN MANAGEMENT UNITS",
      description: "Complete Supply Chain Management units covering all aspects of logistics and operations.",
      subject: "SCM",
      category: "Supply Chain",
      pages: 165,
      downloads: 567,
      rating: 4.6,
      driveLink: "https://drive.google.com/file/d/151KVe-Zz0L36jmUjhiTISElxbIztXz2e/view?usp=share_link",
      thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format",
      tags: ["SCM", "Units", "Logistics"],
      isNew: false
    },
    {
      id: 24,
      title: "MEFA complete notes",
      description: "Complete Managerial Economics and Financial Analysis notes with examples.",
      subject: "Economics",
      category: "Economics",
      pages: 195,
      downloads: 789,
      rating: 4.8,
      driveLink: "https://drive.google.com/file/d/1acNz0m6XuIdhPP8SRFthLObpqF-jI3ZZ/view?usp=sharing",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format",
      tags: ["MEFA", "Complete", "Economics"],
      isNew: false
    },
    {
      id: 25,
      title: "mid 1 imp que",
      description: "Important questions for mid-semester examinations across various subjects.",
      subject: "General",
      category: "Question Banks",
      pages: 45,
      downloads: 345,
      rating: 4.3,
      driveLink: "https://drive.google.com/file/d/1JKCWhobsWGvXduZApr9glwU7Brv2B-OC/view?usp=sharing",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&auto=format",
      tags: ["Mid Exam", "Questions", "Important"],
      isNew: false
    },
    {
      id: 26,
      title: "total MEFA important question",
      description: "Complete collection of important questions for MEFA subject preparation.",
      subject: "Economics",
      category: "Question Banks",
      pages: 55,
      downloads: 456,
      rating: 4.5,
      driveLink: "https://drive.google.com/file/d/1bX35lkOlNDrrv7qF-OHaUAfdUueuDul5/view?usp=sharing",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&auto=format",
      tags: ["MEFA", "Questions", "Complete"],
      isNew: false
    },
    {
      id: 27,
      title: "15A03505 ENTREPRENEURSIP 5 units complete",
      description: "Complete 5 units of Entrepreneurship development with detailed explanations.",
      subject: "Entrepreneurship",
      category: "Entrepreneurship",
      pages: 225,
      downloads: 890,
      rating: 4.8,
      driveLink: "https://drive.google.com/open?id=1m3v7W0zh0fu3bNniqgUCcWwaQVUh3BEG",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&auto=format",
      tags: ["Entrepreneurship", "5 Units", "Complete"],
      isNew: true
    },
    {
      id: 28,
      title: "Question & Bit Bank",
      description: "Question bank and bit bank for various management subjects.",
      subject: "General",
      category: "Question Banks",
      pages: 75,
      downloads: 567,
      rating: 4.4,
      driveLink: "https://drive.google.com/open?id=1jATocICQuVylfB8l5YPpVB2zaQyqEnG-",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&auto=format",
      tags: ["Questions", "Bit Bank", "General"],
      isNew: false
    },
    {
      id: 29,
      title: "TQM",
      description: "Total Quality Management principles, implementation, and case studies.",
      subject: "Quality Management",
      category: "Management",
      pages: 140,
      downloads: 432,
      rating: 4.5,
      driveLink: "https://drive.google.com/open?id=1zhCCPYuDg46dCXMHB0sDc-gKI6uFXXL9",
      thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop&auto=format",
      tags: ["TQM", "Quality", "Management"],
      isNew: false
    },
    {
      id: 30,
      title: "management science",
      description: "Management science techniques, operations research, and decision analysis.",
      subject: "Management Science",
      category: "Management",
      pages: 155,
      downloads: 654,
      rating: 4.6,
      driveLink: "https://drive.google.com/file/d/1IJ8To6uAC1ErHoD2CYVNTBec1prc2VxD/view?usp=sharing",
      thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop&auto=format",
      tags: ["Management Science", "Operations", "Decision"],
      isNew: false
    },
    {
      id: 31,
      title: "Question bank",
      description: "Comprehensive question bank for management and business subjects.",
      subject: "General",
      category: "Question Banks",
      pages: 85,
      downloads: 345,
      rating: 4.3,
      driveLink: "https://drive.google.com/open?id=0B1rDn95s6e78UUo1QURiaUNPWDg",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&auto=format",
      tags: ["Questions", "Bank", "Comprehensive"],
      isNew: false
    },
    {
      id: 32,
      title: "Supply Chain Management",
      description: "Advanced supply chain management concepts and logistics optimization.",
      subject: "SCM",
      category: "Supply Chain",
      pages: 175,
      downloads: 789,
      rating: 4.7,
      driveLink: "https://drive.google.com/file/d/1RkHREqSgSisAc1W3ydCQqGGJgNCWwXAE/view?usp=sharing",
      thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format",
      tags: ["SCM", "Advanced", "Logistics"],
      isNew: false
    },
    {
      id: 33,
      title: "1 2 & 3 Topics",
      description: "Indian Constitution topics 1, 2, and 3 comprehensive study material.",
      subject: "Constitution",
      category: "Legal",
      pages: 90,
      downloads: 234,
      rating: 4.2,
      driveLink: "https://www.slideshare.net/saichandukandati1/indian-constitution-by-professor-sai-chandu",
      thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&auto=format",
      tags: ["Constitution", "Topics", "Indian"],
      isNew: false
    },
    {
      id: 34,
      title: "Fundamental Rights and Duties",
      description: "Indian Constitution - Fundamental Rights and Duties detailed study material.",
      subject: "Constitution",
      category: "Legal",
      pages: 65,
      downloads: 456,
      rating: 4.5,
      driveLink: "https://www.slideshare.net/saichandukandati1/fundamental-rights-and-duties-of-indian-constitution-by-professor-sai-chandu",
      thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&auto=format",
      tags: ["Constitution", "Rights", "Duties"],
      isNew: false
    },
    {
      id: 35,
      title: "fundamental-duties",
      description: "Detailed analysis of fundamental duties as per Indian Constitution.",
      subject: "Constitution",
      category: "Legal",
      pages: 35,
      downloads: 234,
      rating: 4.3,
      driveLink: "https://www.slideshare.net/saichandukandati1/directive-principles-of-state-policy-in-india-fundamental-duties-indian-constitution-by-professor-sai-chandu",
      thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&auto=format",
      tags: ["Duties", "Constitution", "Indian"],
      isNew: false
    },
    {
      id: 36,
      title: "DIRECTIVE PRINCIPLES OF STATE POLICY IN INDIA",
      description: "Comprehensive study of Directive Principles of State Policy in Indian Constitution.",
      subject: "Constitution",
      category: "Legal",
      pages: 75,
      downloads: 567,
      rating: 4.6,
      driveLink: "https://www.slideshare.net/saichandukandati1/directive-principles-of-state-policy-in-india-by-indian-constitution",
      thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&auto=format",
      tags: ["DPSP", "Constitution", "Policy"],
      isNew: false
    },
    {
      id: 37,
      title: "Parliament Composition, Powers and Role",
      description: "Indian Parliament - composition, powers, functions, and role in democracy.",
      subject: "Constitution",
      category: "Legal",
      pages: 85,
      downloads: 432,
      rating: 4.5,
      driveLink: "https://www.slideshare.net/saichandukandati1/parliament-composition-powers-and-role-indian-constitution",
      thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&auto=format",
      tags: ["Parliament", "Powers", "Constitution"],
      isNew: false
    },
    {
      id: 38,
      title: "Professor Sai Chandu Blog",
      description: "Access to Professor Sai Chandu's academic blog with latest updates and resources.",
      subject: "Blog",
      category: "Resources",
      pages: 0,
      downloads: 1234,
      rating: 4.8,
      driveLink: "https://professorsaichandu.blogspot.com/feeds/posts/default",
      thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop&auto=format",
      tags: ["Blog", "Updates", "Resources"],
      isNew: true
    }
  ];

  // Categories for filtering
  const categories = ['All', ...new Set(allENotesData.map(note => note.category))];

  // Filter and search functionality
  const filteredNotes = useMemo(() => {
    return allENotesData.filter(note => {
      const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || note.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredNotes.length / itemsPerPage);
  const currentNotes = filteredNotes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDownload = (driveLink, title) => {
    window.open(driveLink, '_blank');
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section id="e-notes" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Educational Resources & E-Notes
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Comprehensive collection of {allENotesData.length}+ study materials and e-notes designed specifically for MBA and management students. 
            These resources are based on my extensive teaching experience and practical industry knowledge.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{allENotesData.length}+</div>
              <div className="text-sm text-slate-600">Total Resources</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{categories.length - 1}</div>
              <div className="text-sm text-slate-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {allENotesData.reduce((sum, note) => sum + note.downloads, 0).toLocaleString()}+
              </div>
              <div className="text-sm text-slate-600">Total Downloads</div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search notes, subjects, or topics..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Info */}
          <div className="mt-4 text-center text-slate-600">
            Showing {currentNotes.length} of {filteredNotes.length} resources
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </div>
        </div>

        {/* E-Notes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentNotes.map((note) => (
            <div
              key={note.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={note.thumbnail}
                  alt={note.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* New Badge */}
                {note.isNew && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      New
                    </span>
                  </div>
                )}
                
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {note.subject}
                  </span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center">
                      <Icon name="FileText" size={14} className="mr-1" />
                      <span>{note.pages} pages</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Star" size={14} className="mr-1 fill-current" />
                      <span>{note.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2">
                  {note.title}
                </h3>
                <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                  {note.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {note.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {note.tags.length > 3 && (
                    <span className="text-slate-400 text-xs">+{note.tags.length - 3}</span>
                  )}
                </div>

                {/* Stats and Download */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Icon name="Download" size={14} className="mr-1" />
                      <span>{note.downloads}</span>
                    </div>
                  </div>
                  <Button
                    variant="default"
                    size="sm"
                    iconName="Download"
                    iconPosition="left"
                    onClick={() => handleDownload(note.driveLink, note.title)}
                    className="transform hover:scale-105 transition-transform duration-200"
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mb-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {page}
                  </button>
                );
              } else if (
                page === currentPage - 2 ||
                page === currentPage + 2
              ) {
                return <span key={page} className="px-2">...</span>;
              }
              return null;
            })}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
            >
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No resources found</h3>
            <p className="text-slate-500 mb-4">
              Try adjusting your search terms or selecting a different category.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setCurrentPage(1);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <Icon name="MessageSquare" size={48} color="#3b82f6" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Need Specific Study Materials?
            </h3>
            <p className="text-slate-600 mb-6">
              Looking for specific topics, custom training materials, or have questions about the resources? 
              As someone with extensive experience in training and placement coordination, 
              I'm here to help you with tailored educational solutions.
            </p>
            <Button
              variant="outline"
              size="lg"
              iconName="Mail"
              iconPosition="left"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact for Custom Materials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ENotesSection);