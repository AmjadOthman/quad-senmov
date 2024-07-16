import React from "react";

export default function RightImageCard({ title, desc, imgUrl }) {
  return (
    <div className="flex flex-col items-center justify-center rounded m-2 p-4 shadow-lg lg:grid lg:grid-cols-2 lg:w-auto w-5/6">
      <img
        src={imgUrl}
        className="h-[320px] xl:w-[600px] mx-auto md:w-[500px] w-screen compliance-and-legal-requirements-image-css"
      />
      <div className="px-6 py-4">
        <h3 className="text-3xl font-bold text-gray-700 mb-3 ">{title}</h3>
        <p className="text-gray-700 text-xl">{desc}</p>
        <div className="mt-6 flex justify-center items-center">
          <a className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer shadow-lg flex justify-center items-center">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
