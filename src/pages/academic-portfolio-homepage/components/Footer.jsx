import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'E-Notes', href: '#e-notes' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Videos', href: '#videos' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/dr-kandati',
      color: 'hover:text-blue-600'
    },
    {
      name: 'YouTube',
      icon: 'Youtube',
      url: 'https://youtube.com/@edutechkandati',
      color: 'hover:text-red-600'
    },
    {
      name: 'Email',
      icon: 'Mail',
      url: 'mailto:dr.kandati@university.edu',
      color: 'hover:text-green-600'
    },
    {
      name: 'ResearchGate',
      icon: 'BookOpen',
      url: 'https://researchgate.net/profile/dr-kandati',
      color: 'hover:text-teal-600'
    }
  ];

  const resources = [
    { name: 'Research Papers', href: '#' },
    { name: 'Course Materials', href: '#' },
    { name: 'Student Resources', href: '#' },
    { name: 'Academic Calendar', href: '#' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl">
                <Icon name="GraduationCap" size={20} color="white" className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold leading-tight">Dr. Sai Chandu Kandati</h3>
                <p className="text-slate-400 text-xs sm:text-sm">Academic Excellence</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Dedicated to advancing education through innovative teaching methods, 
              comprehensive research, and fostering academic excellence.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-slate-700 transform hover:-translate-y-1`}
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group text-sm sm:text-base"
                  >
                    <Icon name="ChevronRight" size={12} className="mr-2 group-hover:translate-x-1 transition-transform duration-300 sm:w-[14px] sm:h-[14px]" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group text-sm sm:text-base"
                  >
                    <Icon name="ChevronRight" size={12} className="mr-2 group-hover:translate-x-1 transition-transform duration-300 sm:w-[14px] sm:h-[14px]" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <Icon name="Mail" size={14} className="mr-3 mt-1 text-blue-400 flex-shrink-0 sm:w-4 sm:h-4" />
                <div className="min-w-0">
                  <p className="text-slate-300 text-xs sm:text-sm">Email</p>
                  <a
                    href="mailto:dr.kandati@university.edu"
                    className="text-white hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base break-words"
                  >
                    dr.kandati@university.edu
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Icon name="Phone" size={14} className="mr-3 mt-1 text-green-400 flex-shrink-0 sm:w-4 sm:h-4" />
                <div>
                  <p className="text-slate-300 text-xs sm:text-sm">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="text-white hover:text-green-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Icon name="MapPin" size={14} className="mr-3 mt-1 text-red-400 flex-shrink-0 sm:w-4 sm:h-4" />
                <div>
                  <p className="text-slate-300 text-xs sm:text-sm">Office</p>
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    Room 304, CS Department<br />
                    University Campus, Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="mb-4 md:mb-0">
              <h4 className="text-base sm:text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-slate-300 text-sm sm:text-base">
                Get notified about new educational content and research updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 sm:px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 text-sm sm:text-base min-w-0 flex-1 sm:flex-none sm:w-64"
              />
              <button className="px-4 sm:px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center text-sm sm:text-base">
                <Icon name="Send" size={14} className="mr-2 sm:w-4 sm:h-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-0 text-center sm:text-left">
              <p>© {currentYear} Dr. Sai Chandu Kandati. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a href="#" className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Scroll to top"
              >
                <Icon name="ChevronUp" size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;