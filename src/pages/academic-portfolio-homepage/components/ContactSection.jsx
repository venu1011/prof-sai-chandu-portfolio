import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';
import { useContactForm } from '../../../hooks/useAcademicData';
import { contactData } from '../../../data/academicData';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'professorsaichandu@gmail.com',
      link: 'mailto:professorsaichandu@gmail.com'
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+91 9550886140',
      link: 'tel:+919550886140'
    },
    {
      icon: 'MapPin',
      label: 'Address',
      value: '4-5A, Sai Nagar, Padmavathi puram\nTirupati, Andhra Pradesh - 517501',
      link: null
    },
    {
      icon: 'Building',
      label: 'Institution',
      value: 'Siddharth Institute of Engineering & Technology\nPuttur, Andhra Pradesh',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: 'Globe',
      label: 'Blog',
      url: 'https://professorsaichandu.blogspot.in/',
      color: 'bg-orange-600 hover:bg-orange-700'
    },
    {
      icon: 'Mail',
      label: 'Email',
      url: 'mailto:professorsaichandu@gmail.com',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: 'Phone',
      label: 'Call',
      url: 'tel:+919550886140',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: 'BookOpen',
      label: 'Research',
      url: 'https://professorsaichandu.blogspot.in/',
      color: 'bg-teal-600 hover:bg-teal-700'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create mailto URL with form data
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:professorsaichandu@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.open(mailtoUrl, '_blank');
      
      // Show success message
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 sm:mb-4 px-2">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Have questions about my research, need academic guidance, or want to collaborate on 
            entrepreneurship development and training programs? I'd love to hear from you. Let's connect and explore opportunities together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
            <div className="flex items-start sm:items-center mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <Icon name="MessageSquare" size={20} color="white" className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 leading-tight">Send a Message</h3>
                <p className="text-sm sm:text-base text-slate-600">I'll get back to you within 24 hours</p>
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} color="#10b981" className="mr-2" />
                  <span className="text-green-800 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <Icon name="AlertCircle" size={20} color="#ef4444" className="mr-2" />
                  <span className="text-red-800 font-medium">
                    Failed to send message. Please try again or use email directly.
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  error={errors.name}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  error={errors.email}
                  required
                />
              </div>

              <Input
                label="Subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                error={errors.subject}
                required
              />

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me more about your inquiry..."
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                    errors.message ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <Icon name={info.icon} size={18} color="#3b82f6" className="sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">{info.label}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-blue-600 hover:text-blue-700 transition-colors duration-300 text-sm sm:text-base break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-600 whitespace-pre-line text-sm sm:text-base leading-relaxed">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Consultation */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 sm:p-6 md:p-8 text-white">
              <div className="flex items-start sm:items-center mb-4">
                <Icon name="UserCheck" size={20} className="mr-3 flex-shrink-0 sm:w-6 sm:h-6" />
                <h3 className="text-lg sm:text-xl font-bold leading-tight">Professional Consultation</h3>
              </div>
              <p className="text-blue-100 mb-4 text-sm sm:text-base leading-relaxed">
                Available for academic consultations, research collaborations, training programs, 
                and entrepreneurship development initiatives. Let's work together to create 
                impactful educational solutions.
              </p>
              <div className="flex items-start sm:items-center text-xs sm:text-sm text-blue-200">
                <Icon name="CheckCircle" size={14} className="mr-2 mt-0.5 sm:mt-0 flex-shrink-0 sm:w-4 sm:h-4" />
                <span>Training & placement coordination expertise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;