import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { useScrollToSection } from '../../../hooks/useAcademicData';
import { academicData } from '../../../data/academicData';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollToSection } = useScrollToSection();
  
  const { profile } = academicData;
  
  const titles = [
    'Associate Professor & EDC Coordinator',
    'Trainer | Teacher | Writer',
    'M.B.A., Ph.D',
    'Research Scholar & Mentor'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            {profile.name}
          </h1>

          {/* Animated Subtitle */}
          <div className="h-16 sm:h-20 flex items-center justify-center mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-600">
              {displayText}
              <span className="animate-pulse text-blue-600">|</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {profile.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="default" 
              size="lg"
              iconName="BookOpen"
              iconPosition="left"
              className="w-full sm:w-auto transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('e-notes')}
            >
              View E-Notes
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              iconName="Mail"
              iconPosition="left"
              className="w-full sm:w-auto transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors duration-300"
            >
              <Icon name="ChevronDown" size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <Icon name="GraduationCap" size={24} color="#3b82f6" />
        </div>
      </div>
      <div className="absolute top-1/3 right-10 animate-float delay-1000">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
          <Icon name="BookOpen" size={20} color="#8b5cf6" />
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float delay-2000">
        <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center">
          <Icon name="Award" size={22} color="#ec4899" />
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);