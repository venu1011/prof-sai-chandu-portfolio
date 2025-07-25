import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { useYouTubeChannel } from '../../../hooks/useAcademicData';

const VideosSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { channelData, handleSubscribe, handleVideoClick } = useYouTubeChannel();

  return (
    <section id="videos" className="py-20 bg-gradient-to-br from-red-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Family YouTube Channel
          </h2>
          <p className="text-gray-600 mb-8">
            Testing the videos section with basic structure.
          </p>
          
          <div className="grid gap-4">
            {channelData.featuredVideos.map((video) => (
              <div key={video.id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
                <div className="text-sm text-gray-500">
                  {video.views} views • {video.likes} likes
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
