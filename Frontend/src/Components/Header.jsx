import React, { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [hiddenNav, setHiddenNav] = useState(false);
  const handleHiddenNav = () => {
    setHiddenNav(!hiddenNav);
  };
  return (
    <>
      <div className="lg:hidden fixed top-2 left-2 z-10 w-14 h-14 bg-gray-600/90 flex justify-center items-center rounded-2xl">
        <button className="text-white" role="button" onClick={handleHiddenNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="35"
            height="35"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </button>
      </div>

      {/**small screen nav bar
       * responsive navbar
       */}
      <div className="-z-10">
        <div
          className={`fixed  bg-gray-600/90  ${
            hiddenNav ? "block" : "hidden"
          } text-white  -z-10 rounded-2xl left-16 top-2`}
        >
          <nav className="app-navbar flex flex-col m-5 lg:hidden">
            <div className="text-xl font-bold">Senmov Ltd Pty</div>
            <ul className="flex flex-col gap-10 items-center justify-center">
              <li className="hover:text-[#2f3030] duration-200">
                <Link
                  to="/"
                  className="px-3 py-2 cursor-pointer active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="hover:text-[#2f3030]">
                <Link to="/aboutus" className="px-3 py-2 cursor-pointer">
                  About Us
                </Link>
              </li>
              <li className="hover:text-[#2f3030]">
                <Link to="/services" className="px-3 py-2 cursor-pointer">
                  Services
                </Link>
              </li>
              <li className="hover:text-[#2f3030]">
                <Link to="/contactus" className="px-3 py-2 cursor-pointer">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/*Large screen navbar */}
      <div className="fixed w-screen bg-gray-600/90 lg:block hidden text-white">
        <nav className="lg:max-w-5xl xl:max-w-6xl mx-auto py-4 my-3 flex justify-between items-center app-navbar">
          <div className="text-xl font-bold">
            <Link to="/">Senmov Ltd Pty</Link>
          </div>
          <ul className="flex gap-10 items-center justify-between">
            <li className="hover:text-[#2f3030] duration-200">
              <Link
                to="/"
                className="px-3 py-2 cursor-pointer active"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="hover:text-[#2f3030] duration-200">
              <Link to="/aboutus" className="px-3 py-2 cursor-pointer">
                About Us
              </Link>
            </li>
            <li className="hover:text-[#2f3030] duration-200">
              <Link to="/services" className="px-3 py-2 cursor-pointer">
                Services
              </Link>
            </li>
            <li className="hover:text-[#2f3030] duration-200">
              <Link to="/contactus" className="px-3 py-2 cursor-pointer">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
