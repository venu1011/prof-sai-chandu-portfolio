import React from 'react';

export const SkeletonLoader = ({ className = "" }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-slate-300 rounded h-4 w-full mb-2"></div>
      <div className="bg-slate-300 rounded h-4 w-3/4 mb-2"></div>
      <div className="bg-slate-300 rounded h-4 w-1/2"></div>
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      <div className="h-48 bg-slate-300"></div>
      <div className="p-6">
        <div className="h-6 bg-slate-300 rounded mb-3"></div>
        <div className="h-4 bg-slate-300 rounded mb-2"></div>
        <div className="h-4 bg-slate-300 rounded w-3/4 mb-4"></div>
        <div className="flex justify-between items-center">
          <div className="h-4 bg-slate-300 rounded w-1/4"></div>
          <div className="h-8 bg-slate-300 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
};

export const LoadingSpinner = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className="animate-spin rounded-full border-2 border-b-transparent border-blue-600 h-full w-full"></div>
    </div>
  );
};

export const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-slate-600 mb-2">Initializing Experience</h2>
        <p className="text-slate-500">Curating professional excellence for you...</p>
      </div>
    </div>
  );
};
