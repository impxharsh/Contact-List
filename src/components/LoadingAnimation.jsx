import React from 'react';

/**
 * A skeleton loader component that mimics the layout of a ContactCard.
 * It uses a pulsing animation to indicate loading.
 */
function LoadingAnimation() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md transition-all ease-in-out duration-300 flex items-center space-x-4 animate-pulse">
      {/* Avatar Skeleton */}
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      
      <div className="flex-1 space-y-2">
        {/* Name Skeleton */}
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        {/* Email Skeleton */}
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
}

export default LoadingAnimation;
