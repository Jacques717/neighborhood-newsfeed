import React from "react";

const FacebookWidget = ({ header, icon, post, qrUrl }) => {
  return (
    <div className="w-[1011px] h-[1168px] bg-white rounded-lg shadow-md flex flex-col">
      {/* Mini Header */}
      <div className="w-full h-[157px] flex items-center px-4 bg-blue-600 text-white rounded-t-lg">
        <i className={`mdi mdi-${icon} text-4xl mr-4`}></i>
        <h2 className="text-xl font-bold">{header}</h2>
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

      {/* QR Code */}
      <div className="w-full p-4 bg-gray-100 rounded-b-lg flex justify-center items-center">
        <a
          href={qrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Scan QR Code
        </a>
      </div>
    </div>
  );
};

export default FacebookWidget;
