// VideoPlayer.jsx placeholder
import React from 'react';

const VideoPlayer = ({ src, poster = '', title = 'Video content' }) => {
  if (!src) {
    return (
      <div className="w-full h-64 flex items-center justify-center bg-gray-200 text-gray-500 rounded-md">
        No video available
      </div>
    );
  }

  return (
    <div className="w-full rounded-md overflow-hidden shadow">
      <video
        className="w-full h-auto"
        controls
        poster={poster}
        preload="metadata"
        title={title}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
