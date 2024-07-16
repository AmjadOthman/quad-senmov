import React from "react";

function TitleCard({ title, imgUrl }) {
  return (
    <header
      className="w-screen h-[600px] bg-slate-700 flex items-center justify-center bg-image-home-page-css"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-3/4 flex-col items-center justify-center  p-10 rounded-2xl m-5 mb-5">
        <div className="w-3/4 text-center ">
          <p className="text-5xl pt-10 font-bold text-white">{title}</p>
        </div>
        <div className="mt-6 flex justify-center items-center">
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer shadow-lg flex justify-center items-center">
            Learn more
          </span>
        </div>
      </div>
    </header>
  );
}

export default TitleCard;
