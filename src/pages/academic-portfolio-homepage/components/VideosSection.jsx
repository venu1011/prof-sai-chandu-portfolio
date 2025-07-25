import React from 'react';

const VideosSection = () => {
  return (
    <section id="videos" className="py-20 bg-red-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          🎬 Please Subscribe My Daughter's Channel
        </h2>
        
        <p className="text-lg text-gray-600 mb-8">
          Support our family by subscribing to my daughter's YouTube channel!
        </p>
        
        <button 
          onClick={() => window.open('https://youtube.com/@channel-name', '_blank')}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg"
        >
          Subscribe Now 🔔
        </button>
      </div>
    </section>
  );
};

export default VideosSection;