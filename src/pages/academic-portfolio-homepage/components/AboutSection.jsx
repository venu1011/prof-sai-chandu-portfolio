import React, { useEffect, useRef } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import profie from '../../../data/KS.jpg';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-slide-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const qualifications = [
    {
      id: 1,
      degree: "Ph.D - CRT",
      institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
      year: "2024",
      description: "Impact Analysis of Campus Recruitment Training Programme on the Placement of Management Graduates Across Rayalaseema Region in Andhra Pradesh"
    },
    {
      id: 2,
      degree: "MBA - HR & Marketing",
      institution: "Narayana Engineering College, Gudur",
      year: "2011-13",
      description: "Specialization in Human Resource Management and Marketing with focus on organizational development"
    },
    {
      id: 3,
      degree: "B.Com - Computers",
      institution: "Emerald's Degree College, Tirupati",
      year: "2008-11",
      description: "Foundation in Commerce with Computer Applications, building strong analytical and technical skills"
    }
  ];

  const experience = [
    {
      id: 1,
      position: "Associate Professor & EDC Coordinator",
      institution: "Siddharth Institute of Engineering & Technology (SIETK)",
      duration: "July 2016 - Present",
      icon: "GraduationCap",
      color: "bg-blue-500"
    },
    {
      id: 2,
      position: "Assistant Professor & Training & Placement Head",
      institution: "Vaishnavi Institute of Technology (VITT)",
      duration: "Sep 2013 - July 2016",
      icon: "BookOpen",
      color: "bg-purple-500"
    },
    {
      id: 3,
      position: "Training Coordinator",
      institution: "Reliance Life Insurance, Gudur",
      duration: "Training Programs",
      icon: "Users",
      color: "bg-green-500"
    },
    {
      id: 4,
      position: "Back Office Assistant",
      institution: "IFFCO-TOKIO General Insurance",
      duration: "Administrative Support",
      icon: "FileText",
      color: "bg-orange-500"
    }
  ];

  const interests = [
    { name: "Business Communication", icon: "MessageSquare" },
    { name: "Managerial Economics", icon: "TrendingUp" },
    { name: "Operations Management", icon: "Settings" },
    { name: "Entrepreneurship Development", icon: "Lightbulb" },
    { name: "Human Resource Management", icon: "Users2" },
    { name: "Research Methodology", icon: "Search" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile First */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 sm:mb-4 animate-on-scroll opacity-0">
            About Me
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 max-w-3xl mx-auto animate-on-scroll opacity-0 px-4">
            Passionate educator and researcher dedicated to advancing knowledge 
            and inspiring the next generation of business leaders and entrepreneurs.
          </p>
        </div>

        {/* Profile Section - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20 animate-on-scroll opacity-0">
          {/* Profile Image */}
          <div className="relative order-1 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-md mx-auto lg:max-w-none">
              <Image
                src={profie}
                alt="Dr. K. Sai Chandu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-blue-600 text-white p-3 sm:p-4 rounded-xl shadow-lg">
              <Icon name="Award" size={24} className="sm:w-8 sm:h-8" />
            </div>
          </div>

          {/* Profile Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">
              Academic Excellence & Professional Innovation
            </h3>
            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Currently serving as an Associate Professor in the Department of Management Studies 
              at Siddharth Institute of Engineering & Technology (SIETK). Additionally responsible 
              for coordinating activities under the Entrepreneurship Development Cell (EDC), 
              fostering entrepreneurial skills among students and supporting start-up initiatives.
            </p>
            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              My teaching philosophy centers on creating engaging, interactive learning 
              environments that bridge the gap between academic learning and practical 
              workplace requirements, enhancing students' employability and career readiness.
            </p>

            {/* Teaching Interests */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4">Teaching Specializations</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                {interests.map((interest) => (
                  <div
                    key={interest.name}
                    className="flex items-center space-x-2 p-2.5 sm:p-3 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    <Icon name={interest.icon} size={14} className="sm:w-4 sm:h-4" color="#3b82f6" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications - Mobile First */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8 sm:mb-12 animate-on-scroll opacity-0">
            Educational Qualifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {qualifications.map((qual) => (
              <div
                key={qual.id}
                className="bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <Icon name="GraduationCap" size={20} className="sm:w-6 sm:h-6" color="white" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 sm:px-3 rounded-full">
                    {qual.year}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-2">{qual.degree}</h4>
                <p className="text-blue-600 font-medium mb-2 sm:mb-3 text-sm sm:text-base">{qual.institution}</p>
                <p className="text-slate-600 text-xs sm:text-sm">{qual.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline - Mobile Optimized */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8 sm:mb-12 animate-on-scroll opacity-0">
            Professional Experience
          </h3>
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="absolute left-3 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 hidden sm:block"></div>
            
            <div className="space-y-6 sm:space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-center animate-on-scroll opacity-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node - Hidden on mobile */}
                  <div className="absolute left-3 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white border-2 sm:border-4 border-blue-600 rounded-full z-10 hidden sm:block"></div>
                  
                  {/* Content Card - Mobile First */}
                  <div className={`w-full sm:ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 ${exp.color} rounded-lg flex items-center justify-center mr-2 sm:mr-3`}>
                          <Icon name={exp.icon} size={16} className="sm:w-5 sm:h-5" color="white" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-500">{exp.duration}</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1">{exp.position}</h4>
                      <p className="text-blue-600 font-medium text-sm sm:text-base">{exp.institution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;