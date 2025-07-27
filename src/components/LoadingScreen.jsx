import React, { useState, useEffect } from 'react';
import Icon from './AppIcon';

const LoadingScreen = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const loadingPhases = [
    { text: "Initializing Academic Excellence...", icon: "GraduationCap" },
    { text: "Loading Research Portfolio...", icon: "BookOpen" },
    { text: "Preparing Educational Resources...", icon: "Award" },
    { text: "Finalizing Professional Profile...", icon: "User" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const phaseInterval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % loadingPhases.length);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(phaseInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Academic Icons */}
        <div className="absolute top-1/4 left-1/4 text-blue-300/20 animate-float">
          <Icon name="BookOpen" size={60} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-indigo-300/20 animate-float" style={{ animationDelay: '1s' }}>
          <Icon name="Award" size={45} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-blue-300/20 animate-float" style={{ animationDelay: '2s' }}>
          <Icon name="Users" size={50} />
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-indigo-300/20 animate-float" style={{ animationDelay: '1.5s' }}>
          <Icon name="Target" size={40} />
        </div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-300/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-indigo-300/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-blue-300/20 rotate-45 animate-bounce-gentle"></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative text-center z-10 max-w-md mx-auto px-6">
        {/* Central Logo Animation */}
        <div className="relative mb-8">
          {/* Outer Ring */}
          <div className="absolute inset-0 w-28 h-28 mx-auto">
            <div className="w-full h-full border-4 border-blue-400/30 rounded-full animate-spin"></div>
          </div>
          
          {/* Middle Ring */}
          <div className="absolute inset-2 w-24 h-24 mx-auto">
            <div className="w-full h-full border-3 border-indigo-400/50 rounded-full animate-spin-reverse"></div>
          </div>
          
          {/* Inner Logo */}
          <div className="relative w-28 h-28 mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-2xl">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Icon name="GraduationCap" size={32} color="white" className="animate-pulse" />
            </div>
          </div>
          
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-28 h-28 mx-auto -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - loadingProgress / 100)}`}
              className="transition-all duration-300 ease-out"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Academic Title */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Dr. K. SaiChandu Kandati
            </span>
          </h1>
          <p className="text-blue-200 text-sm font-medium tracking-wider uppercase">
            Academic Portfolio
          </p>
        </div>

        {/* Dynamic Loading Phase */}
        <div className="mb-6 h-12 flex items-center justify-center">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Icon name={loadingPhases[currentPhase].icon} size={16} color="#60A5FA" className="animate-pulse" />
            </div>
            <span className="text-blue-100 text-sm font-medium">
              {loadingPhases[currentPhase].text}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full h-1 bg-blue-900/50 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${loadingProgress}%` }}
            >
              <div className="absolute right-0 top-0 h-full w-4 bg-white/30 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-blue-300 text-xs">Loading...</span>
            <span className="text-blue-300 text-xs font-mono">{loadingProgress}%</span>
          </div>
        </div>

        {/* Academic Tagline */}
        <p className="text-blue-200/80 text-sm leading-relaxed animate-fade-in-delay">
          Excellence in Education • Innovation in Research • Leadership in Academia
        </p>

        {/* Pulsing Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: `${index * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
