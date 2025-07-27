import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'e-notes', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100; // Add offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Set initial active section on mount
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on the academic portfolio homepage
  const isOnHomepage = location.pathname === '/academic-portfolio-homepage' || location.pathname === '/';

  // Navigation items for homepage sections
  const homepageNavigationItems = [
    { name: 'Home', hash: '#home', sectionId: 'home', icon: 'Home' },
    { name: 'About', hash: '#about', sectionId: 'about', icon: 'User' },
    { name: 'E-Notes', hash: '#e-notes', sectionId: 'e-notes', icon: 'BookOpen' },
    { name: 'Achievements', hash: '#achievements', sectionId: 'achievements', icon: 'Award' },
    { name: 'Contact', hash: '#contact', sectionId: 'contact', icon: 'Mail' }
  ];

  // Navigation items for other pages (currently not implemented)
  const pageNavigationItems = [
    { name: 'Home', path: '/academic-portfolio-homepage', icon: 'Home' },
    { name: 'About', hash: '#about', icon: 'User' },
    { name: 'E-Notes', hash: '#e-notes', icon: 'BookOpen' },
    { name: 'Achievements', hash: '#achievements', icon: 'Award' },
    { name: 'Videos', hash: '#videos', icon: 'Play' },
    { name: 'Contact', hash: '#contact', icon: 'Mail' }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const isActiveSection = (sectionId) => {
    return activeSection === sectionId;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleHashClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScheduleMeeting = () => {
    // You can replace this with your actual scheduling service
    // Options: Calendly, Google Calendar, Microsoft Bookings, etc.
    const meetingUrl = 'mailto:saichandu@example.com?subject=Meeting Request&body=Hi Dr. Kandati,%0D%0A%0D%0AI would like to schedule a meeting with you.%0D%0A%0D%0APlease let me know your available times.%0D%0A%0D%0AThank you!';
    
    // Alternative: Open Calendly or similar service
    // const meetingUrl = 'https://calendly.com/your-username';
    
    window.open(meetingUrl, '_blank');
  };

  const handleDownloadCV = () => {
    // Replace with actual CV file path
    const cvUrl = '/assets/Dr_SaiChandu_Kandati_CV.pdf';
    
    // Create a temporary link to download the file
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Dr_SaiChandu_Kandati_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-4 lg:px-8">
          {/* Logo - Mobile First */}
          <Link 
            to="/academic-portfolio-homepage" 
            className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity duration-300"
          >
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg">
              <Icon name="GraduationCap" size={20} color="white" className="sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg font-semibold text-foreground">Dr.K.SaiChandu Kandati</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Professional Excellence</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Always show homepage section navigation since it's a single-page app */}
            {homepageNavigationItems.map((item, index) => (
              <HashLink
                key={item.name}
                to={`/academic-portfolio-homepage${item.hash}`}
                smooth
                className={`flex items-center space-x-2 px-3 py-2 xl:px-4 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in ${
                  isActiveSection(item.sectionId)
                    ? 'bg-primary text-primary-foreground shadow-elevation-1 animate-glow'
                    : 'text-foreground hover:bg-muted hover:text-foreground hover-wiggle'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon name={item.icon} size={16} />
                <span className="hidden xl:inline">{item.name}</span>
              </HashLink>
            ))}
          </nav>

          {/* Tablet Navigation (medium screens) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1">
            {homepageNavigationItems.map((item, index) => (
              <HashLink
                key={item.name}
                to={`/academic-portfolio-homepage${item.hash}`}
                smooth
                className={`flex items-center justify-center p-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isActiveSection(item.sectionId)
                    ? 'bg-primary text-primary-foreground shadow-elevation-1'
                    : 'text-foreground hover:bg-muted hover:text-foreground'
                }`}
                title={item.name}
              >
                <Icon name={item.icon} size={18} />
              </HashLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            <Button variant="outline" size="sm" onClick={handleDownloadCV} className="text-xs xl:text-sm">
              <Icon name="Download" size={14} className="mr-1 xl:mr-2" />
              <span className="hidden xl:inline">CV</span>
            </Button>
            <Button variant="default" size="sm" onClick={handleScheduleMeeting} className="text-xs xl:text-sm">
              <Icon name="Calendar" size={14} className="mr-1 xl:mr-2" />
              <span className="hidden xl:inline">Schedule</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden p-1.5 sm:p-2"
            onClick={toggleMobileMenu}
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} className="sm:w-6 sm:h-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <nav className="px-3 py-3 sm:px-4 sm:py-4 space-y-1 sm:space-y-2">
              {/* Always show homepage section navigation for mobile */}
              {homepageNavigationItems.map((item, index) => (
                <HashLink
                  key={item.name}
                  to={`/academic-portfolio-homepage${item.hash}`}
                  smooth
                  onClick={handleHashClick}
                  className={`flex items-center space-x-3 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl text-sm font-medium transition-all duration-300 animate-slide-in-left ${
                    isActiveSection(item.sectionId)
                      ? 'bg-primary text-primary-foreground shadow-elevation-1'
                      : 'text-foreground hover:bg-muted card-hover'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.name}</span>
                </HashLink>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-3 sm:pt-4 space-y-2 border-t border-border">
                <Button variant="outline" fullWidth onClick={handleDownloadCV} className="text-sm">
                  <Icon name="Download" size={16} className="mr-2" />
                  Download CV
                </Button>
                <Button variant="default" fullWidth onClick={handleScheduleMeeting} className="text-sm">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Schedule Meeting
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;