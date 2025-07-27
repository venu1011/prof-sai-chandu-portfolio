import React from 'react';

const VideosSection = () => {
  return (
    <section id="videos" className="py-12 sm:py-16 md:py-20 bg-red-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-2 leading-tight">
          🎬 Please Subscribe My Daughter's Channel
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4 leading-relaxed">
          Support our family by subscribing to my daughter's YouTube channel!
        </p>
        
        <button 
          onClick={() => window.open('https://youtube.com/@channel-name', '_blank')}
          className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-colors duration-300"
        >
          Subscribe Now 🔔
        </button>
      </div>
    </section>
  );
};

export default VideosSection;