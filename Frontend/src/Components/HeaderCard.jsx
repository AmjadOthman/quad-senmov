import React from "react";
import { Link } from "react-scroll";

export default function ({
  title,
  desc,
  imgUrl,
  buttonLink,
  smooth,
  duration,
}) {
  return (
    <header
      className="w-screen h-screen bg-slate-700 flex items-center justify-center bg-image-home-page-css"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-3/4 flex-col items-center justify-center bg-slate-400/80 p-10 rounded-2xl m-5 mb-5">
        <div className="w-3/4 text-center ">
          <span className="text-2xl mb-2 font-bold text-white shadow-sm">
            {title}
          </span>
          <p className="text-xl mb:text-4xl max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl text-white">
            {desc}
          </p>
        </div>

        <div className="mt-6 flex justify-center items-center">
          <a className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer shadow-lg flex justify-center items-center">
            Learn more
          </a>
        </div>
      </div>
    </header>
  );
}
