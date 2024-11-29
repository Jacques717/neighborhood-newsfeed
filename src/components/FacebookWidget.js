import React from "react";

const FacebookWidget = ({ header, icon, post, qrUrl }) => {
  return (
    <div className="w-[1011px] h-[1168px] bg-white rounded-lg shadow-md">
      {/* Mini Header */}
      <div className="w-full h-[157px] flex items-center px-4 bg-blue-600 text-white">
        <i className={`mdi mdi-${icon} text-4xl mr-4`}></i>
        <h2 className="text-xl font-bold">{header}</h2>
      </div>

      {/* Body */}
      <div className="w-full h-[1011px] p-4 flex flex-col items-center">
        <img
          src={post.fullPicture}
          alt="Facebook Post"
          className="w-full h-[400px] object-cover rounded-lg mb-4"
        />
        <div className="w-full">
          <p className="text-sm font-semibold mb-2">{post.pageName}</p>
          <p className="text-sm mb-2">{post.postMessage}</p>
          <a
            href={post.permalinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm"
          >
            View Full Post
          </a>
        </div>
      </div>

      {/* QR Code */}
      <div className="flex justify-center mt-4">
        <a
          href={qrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Scan QR Code
        </a>
      </div>
    </div>
  );
};

export default FacebookWidget;
