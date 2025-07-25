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
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 animate-on-scroll opacity-0">
            About Me
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto animate-on-scroll opacity-0">
            Passionate educator and researcher dedicated to advancing knowledge 
            and inspiring the next generation of business leaders and entrepreneurs.
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 animate-on-scroll opacity-0">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={profie}
                alt="Dr. K. Sai Chandu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
              <Icon name="Award" size={32} />
            </div>
          </div>

          {/* Profile Content */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Academic Excellence & Professional Innovation
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Currently serving as an Associate Professor in the Department of Management Studies 
              at Siddharth Institute of Engineering & Technology (SIETK). Additionally responsible 
              for coordinating activities under the Entrepreneurship Development Cell (EDC), 
              fostering entrepreneurial skills among students and supporting start-up initiatives.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              My teaching philosophy centers on creating engaging, interactive learning 
              environments that bridge the gap between academic learning and practical 
              workplace requirements, enhancing students' employability and career readiness.
            </p>

            {/* Teaching Interests */}
            <div>
              <h4 className="text-xl font-semibold text-slate-800 mb-4">Teaching Specializations</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {interests.map((interest) => (
                  <div
                    key={interest.name}
                    className="flex items-center space-x-2 p-3 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    <Icon name={interest.icon} size={16} color="#3b82f6" />
                    <span className="text-sm font-medium text-slate-700">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-12 animate-on-scroll opacity-0">
            Educational Qualifications
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {qualifications.map((qual) => (
              <div
                key={qual.id}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="GraduationCap" size={24} color="white" />
                  </div>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {qual.year}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{qual.degree}</h4>
                <p className="text-blue-600 font-medium mb-3">{qual.institution}</p>
                <p className="text-slate-600 text-sm">{qual.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-12 animate-on-scroll opacity-0">
            Professional Experience
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-center animate-on-scroll opacity-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-600 rounded-full z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                      <div className="flex items-center mb-3">
                        <div className={`w-10 h-10 ${exp.color} rounded-lg flex items-center justify-center mr-3`}>
                          <Icon name={exp.icon} size={20} color="white" />
                        </div>
                        <span className="text-sm font-medium text-slate-500">{exp.duration}</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-800 mb-1">{exp.position}</h4>
                      <p className="text-blue-600 font-medium">{exp.institution}</p>
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