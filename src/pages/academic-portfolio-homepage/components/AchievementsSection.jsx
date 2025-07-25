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
    <section id="achievements" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Achievements & Research
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of academic achievements, research contributions, and scholarly publications 
            that demonstrate excellence in education, innovation, and intellectual property development.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="achievement-card text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={24} color="white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Cards */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-12">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="achievement-card bg-gradient-to-br from-white to-slate-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${achievement.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                      <Icon name={achievement.icon} size={24} color="white" />
                    </div>
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        {achievement.category}
                      </span>
                      <div className="text-sm font-medium text-slate-500">{achievement.year}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-slate-800 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-blue-600 font-semibold mb-3">
                  {achievement.subtitle}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-4 flex items-center justify-end">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research & Publications */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-12">
            Research & Publications
          </h3>
          <div className="space-y-8">
            {researchPublications && researchPublications.length > 0 ? (
              researchPublications.map((section) => (
                <div
                  key={section.id}
                  className="research-card bg-gradient-to-r from-slate-50 to-white p-8 rounded-2xl shadow-lg border border-slate-100 opacity-100"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${section.color} rounded-xl flex items-center justify-center mr-6 shadow-lg`}>
                      <Icon name={section.icon} size={28} color="white" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800">{section.title}</h4>
                  </div>
                  
                  <div className="grid md:grid-cols-1 gap-4">
                    {section.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h5 className="text-lg font-semibold text-slate-800">{item.name}</h5>
                          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-slate-600">{item.description}</p>
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <Icon name="Target" size={48} className="mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">
              Continuing Excellence in Research & Innovation
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-6">
              Every achievement represents a commitment to advancing knowledge and contributing to academic excellence. 
              Explore my research work, publications, and innovative contributions to the field of management education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('e-notes').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
              >
                <Icon name="BookOpen" size={20} className="mr-2" />
                Explore Resources
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
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