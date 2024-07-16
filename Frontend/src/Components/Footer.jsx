import React from "react";

function Footer() {
  return (
    <div className="w-screen bg-gray-600/90 text-white ">
      <ul className="flex flex-col justify-center items-center lg:max-w-7xl mx-auto ">
        <span className="font-bold text-2xl p-3 ">Name</span>
        <li className="p-2 lg:max-w-7xl mx-auto">
          42 Buckley Ave, Blacktown NSW 2148 Australia
        </li>
        <li className="flex p-2 gap-1 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18px"
            height="18px"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>

          <span>: info@senmov.com</span>
        </li>
        <li className="flex p-2 gap-1 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18px"
            height="18px"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>

          <span>: +61 402 216 349</span>
        </li>
        <li className="p-2">
          by
          <a
            href="#"
            className="font-bold text-xl lg:max-w-7xl mx-auto pl-1 hover:text-gray-700"
          >
            Quad Digital Media
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
