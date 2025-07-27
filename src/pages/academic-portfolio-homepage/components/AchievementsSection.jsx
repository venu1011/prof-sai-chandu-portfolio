import React, { useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import { academicData } from '../../../data/academicData';

const AchievementsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.achievement-card, .research-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Add custom animation styles
    const style = document.createElement('style');
    style.textContent = `
      .achievement-card {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .achievement-card.animate-slide-in {
        opacity: 1;
        transform: translateY(0);
      }
      
      .research-card {
        opacity: 0;
        transform: translateX(-50px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .research-card.animate-slide-in {
        opacity: 1;
        transform: translateX(0);
      }
    `;
    document.head.appendChild(style);

    return () => {
      observer.disconnect();
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  // Use centralized data
  const { achievements, stats, researchPublications } = academicData;

  return (
    <section id="achievements" className="py-12 sm:py-16 md:py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 sm:mb-4 px-2">
            Achievements & Research
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4 leading-relaxed">
            A comprehensive overview of academic achievements, research contributions, and scholarly publications 
            that demonstrate excellence in education, innovation, and intellectual property development.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="achievement-card text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Icon name={stat.icon} size={20} color="white" className="sm:w-6 sm:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Cards */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8 sm:mb-12 px-4">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="achievement-card bg-gradient-to-br from-white to-slate-50 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start sm:items-center">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${achievement.color} rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg flex-shrink-0`}>
                      <Icon name={achievement.icon} size={20} color="white" className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full mb-2">
                        {achievement.category}
                      </span>
                      <div className="text-xs sm:text-sm font-medium text-slate-500">{achievement.year}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 leading-tight">
                  {achievement.title}
                </h4>
                <p className="text-blue-600 font-semibold mb-3 text-sm sm:text-base">
                  {achievement.subtitle}
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {achievement.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-4 flex items-center justify-end">
                  <div className="w-6 sm:w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research & Publications */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8 sm:mb-12 px-4">
            Research & Publications
          </h3>
          <div className="space-y-6 sm:space-y-8">
            {researchPublications && researchPublications.length > 0 ? (
              researchPublications.map((section) => (
                <div
                  key={section.id}
                  className="research-card bg-gradient-to-r from-slate-50 to-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 opacity-100"
                >
                  <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${section.color} rounded-xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg flex-shrink-0`}>
                      <Icon name={section.icon} size={20} color="white" className="sm:w-7 sm:h-7" />
                    </div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 leading-tight">{section.title}</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {section.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                          <h5 className="text-base sm:text-lg font-semibold text-slate-800 leading-tight">{item.name}</h5>
                          <span className="text-xs sm:text-sm font-medium text-blue-600 bg-blue-100 px-2 sm:px-3 py-1 rounded-full w-fit">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-slate-500">No research publications data available.</p>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
            <Icon name="Target" size={40} className="mx-auto mb-4 opacity-90 sm:w-12 sm:h-12" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4 px-2">
              Continuing Excellence in Research & Innovation
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-sm sm:text-base leading-relaxed px-4">
              Every achievement represents a commitment to advancing knowledge and contributing to academic excellence. 
              Explore my research work, publications, and innovative contributions to the field of management education.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button
                onClick={() => document.getElementById('e-notes').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center text-sm sm:text-base"
              >
                <Icon name="BookOpen" size={18} className="mr-2 sm:w-5 sm:h-5" />
                Explore Resources
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
              >
                <Icon name="MessageCircle" size={18} className="mr-2 sm:w-5 sm:h-5" />
                Collaborate With Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AchievementsSection);