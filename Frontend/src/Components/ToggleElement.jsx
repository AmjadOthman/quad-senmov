import React, { useState } from "react";

function ToggleElement({ order, title, desc }) {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
    console.log(isToggle);
  };
  return (
    <div className="flex flex-col mb-3 max-w-xl md:max-w-2xl lg:max-w-5xl text-2xl w-full ">
      <div
        className="flex items-center justify-between font-bold w-full cursor-pointer"
        onClick={handleToggle}
      >
        <div className="text-base">
          {order}. {title}
        </div>
        <div>
          {isToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        className={` text-white text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 my-2 bg-gray-500/90 p-3 rounded-lg ${
          isToggle ? "block" : "hidden"
        }`}
      >
        {desc}
      </div>
    </div>
  );
}

export default ToggleElement;
