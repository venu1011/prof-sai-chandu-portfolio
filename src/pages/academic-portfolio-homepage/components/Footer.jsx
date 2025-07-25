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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl">
                <Icon name="GraduationCap" size={24} color="white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Sai Chandu Kandati</h3>
                <p className="text-slate-400 text-sm">Academic Excellence</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Dedicated to advancing education through innovative teaching methods, 
              comprehensive research, and fostering academic excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-slate-700 transform hover:-translate-y-1`}
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <Icon name="ChevronRight" size={14} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <Icon name="ChevronRight" size={14} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Icon name="Mail" size={16} className="mr-3 mt-1 text-blue-400" />
                <div>
                  <p className="text-slate-300 text-sm">Email</p>
                  <a
                    href="mailto:dr.kandati@university.edu"
                    className="text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    dr.kandati@university.edu
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Icon name="Phone" size={16} className="mr-3 mt-1 text-green-400" />
                <div>
                  <p className="text-slate-300 text-sm">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="text-white hover:text-green-400 transition-colors duration-300"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Icon name="MapPin" size={16} className="mr-3 mt-1 text-red-400" />
                <div>
                  <p className="text-slate-300 text-sm">Office</p>
                  <p className="text-white text-sm">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-slate-300 text-sm">
                Get notified about new educational content and research updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                <Icon name="Send" size={16} className="mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              <p>© {currentYear} Dr. Sai Chandu Kandati. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Scroll to top"
              >
                <Icon name="ChevronUp" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;