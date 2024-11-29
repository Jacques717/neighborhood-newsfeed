import React from 'react';

const LandownerWidget = ({ header, post, qrUrl }) => {
  // Construct the full Cloudinary URL
  const cloudinaryBaseURL = "https://res.cloudinary.com/dlalovyeu/image/upload/";
  const cloudinaryTransforms = "dpr_auto,w_1011,h_1011,c_pad,e_grayscale,b_auto:predominant/";
  const imageUrl = `${cloudinaryBaseURL}${cloudinaryTransforms}${post.creative.cloudinaryId}.png`;

  return (
    <div className="w-full h-[1168px] bg-white rounded-lg shadow-lg p-4">
      {/* Widget Header */}
      <div className="w-full h-[157px] bg-gray-200 flex items-center p-4 rounded-t-lg">
        <div className="flex items-center space-x-4">
          {/* Icon */}
          <div className="w-12 h-12 bg-yellow-500 text-white flex items-center justify-center rounded-full">
            <i className="mdi mdi-bullhorn-outline text-2xl"></i>
          </div>
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800">{header}</h2>
        </div>
      </div>

      {/* Widget Body */}
      <div className="w-full h-[1011px] flex flex-col items-center justify-center">
        {/* Ad Image */}
        <img
          src={imageUrl}
          alt="Ad"
          className="w-[1011px] h-[1011px] object-cover rounded-lg shadow-md mb-4"
        />

        {/* QR Code Link */}
        <a
          href={qrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 text-sm mt-4"
        >
          View All Posts
        </a>
      </div>
    </div>
  );
};

export default LandownerWidget;
