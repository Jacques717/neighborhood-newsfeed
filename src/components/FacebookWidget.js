import React from "react";

const FacebookWidget = ({ header, icon, post, qrUrl }) => {
  return (
    <div className="w-[1011px] h-[1168px] bg-white rounded-lg shadow-md flex flex-col">
      {/* Mini Header */}
      <div className="w-full h-[157px] flex items-center justify-between px-4 bg-blue-600 text-white rounded-t-lg">
        <div className="flex items-center">
          <i className={`mdi mdi-${icon} text-4xl mr-4`}></i>
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
          <span className="text-xs mt-2">Scan QR Code</span>
        </div>
      </div>

      {/* Body */}
      <div className="w-full h-full flex-1 p-4">
        <img
          src={post.fullPicture}
          alt="Facebook Post"
          className="w-full h-[400px] object-cover rounded-lg shadow mb-4"
        />
        <div className="w-full">
          <p className="text-lg font-semibold text-gray-800 mb-2">{post.pageName}</p>
          <p className="text-sm text-gray-700 mb-4">{post.postMessage}</p>
          <a
            href={post.permalinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 text-sm"
          >
            View Full Post
          </a>
        </div>
      </div>
    </div>
  );
};

export default FacebookWidget;
