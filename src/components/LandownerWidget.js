import React from 'react';

const LandownerWidget = ({ header, post, qrUrl }) => {
  // Construct the full Cloudinary URL
  const cloudinaryBaseURL = "https://res.cloudinary.com/dlalovyeu/image/upload/";
  const cloudinaryTransforms = "dpr_auto,w_1011,h_1011,c_pad,e_grayscale,b_auto:predominant/";
  const imageUrl = `${cloudinaryBaseURL}${cloudinaryTransforms}${post.creative.cloudinaryId}.png`;

  return (
    <div className="landowner-widget">
      {/* Header */}
      <h2 className="text-lg font-bold mb-4">{header}</h2>

      {/* Ad Image */}
      <img
        src={imageUrl}
        alt="Ad"
        className="w-full h-auto rounded-lg shadow-md"
      />

      {/* QR Code Link */}
      <a
        href={qrUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mt-4 block"
      >
        View All Posts
      </a>
    </div>
  );
};

export default LandownerWidget;
