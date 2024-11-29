import React from "react";

const LandownerWidget = ({ header, post, qrUrl, qrPrompt }) => {
  // Construct the full Cloudinary URL
  const cloudinaryBaseURL = "https://res.cloudinary.com/dlalovyeu/image/upload/";
  const cloudinaryTransforms = "dpr_auto,w_1011,h_1011,c_pad,e_grayscale,b_auto:predominant/";
  const imageUrl = `${cloudinaryBaseURL}${cloudinaryTransforms}${post.creative.cloudinaryId}.png`;

  return (
    <div className="w-[1011px] h-[1168px] bg-white rounded-lg shadow-md flex flex-col">
      {/* Mini Header */}
      <div className="w-full h-[157px] flex items-center justify-between px-4 bg-blue-500 text-white rounded-t-lg">
        <div className="flex items-center">
          <i className="mdi mdi-bullhorn-outline text-4xl mr-4"></i>
          <h2 className="text-xl font-bold">{header}</h2>
        </div>
        <div className="flex flex-col items-center">
          <a
            href={qrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-[40px] h-[40px] bg-white rounded-full p-2"
          >
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
                qrUrl
              )}`}
              alt="QR Code"
              className="w-full h-full"
            />
          </a>
          <span className="text-xs mt-2">{qrPrompt}</span>
        </div>
      </div>

      {/* Body */}
      <div className="w-full h-full flex-1 p-4 flex justify-center items-center">
        <img
          src={imageUrl}
          alt="Ad"
          className="max-w-full max-h-full rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default LandownerWidget;
