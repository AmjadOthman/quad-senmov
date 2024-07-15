import React from "react";

function Card({ title, desc }) {
  return (
    <div className="m-2 p-4 rounded overflow-hidden shadow-lg w-1/3 lg:w-auto">
      <div className="px-6 py-4">
        <span className="font-bold text-xl mb-2">{title}</span>
        <p className="text-base text-gray-700">{desc}</p>
      </div>
      <div className="px-4 pt-4">
        <a
          href="/services"
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default Card;
