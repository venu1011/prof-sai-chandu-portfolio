import React from 'react';
import Icon from './AppIcon';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Icon name="GraduationCap" size={40} color="white" />
          </div>
          <div className="absolute -inset-2 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>
        </div>

        {/* Loading Text */}
        <h1 className="text-2xl font-bold text-slate-800 mb-4 animate-fade-in">
          Academic Portfolio
        </h1>
        <p className="text-slate-600 mb-6 animate-fade-in-delay">
          Loading your academic journey...
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-slate-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-loading-progress"></div>
        </div>

        {/* Floating Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
