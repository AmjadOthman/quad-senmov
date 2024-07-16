import React from "react";
import Image from "../../src/assets/home_page.jpg";
function CntctUsHeaderCard() {
  return (
    <header
      className="w-screen h-screen bg-slate-700 flex items-center justify-center bg-image-home-page-css"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-3/4 flex-col items-center justify-center bg-slate-400/80 p-10 rounded-2xl m-5 mb-5 gap-5">
        <div className="w-3/4 text-center ">
          <span className="text-xl mb:text-4xl max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl text-white text-center">
            Ready to Partner with Us?
          </span>
        </div>

        <div className="w-full text-center ">
          <p className="text-md mb-2 font-bold  text-white shadow-sm">
            Embark on your Australian business journey with confidence. Contact
            Us today to explore how our Nominee Director Services can be
            tailored to meet your unique business requirements.
          </p>
        </div>

        <div className="w-full text-center ">
          <p className="text-white text-center">You can visit us</p>
          <p className="text-md mb-2 font-bold text-white shadow-sm">
            42 Buckley Ave, Blacktown NSW 2148 Australia
          </p>
        </div>

        <div className="w-full text-center text-white flex flex-col gap-1">
          <p>or email us at</p>
          <div className="flex p-2 gap-1 items-center justify-center">
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

            <span className="font-bold">: info@senmov.com</span>
          </div>
        </div>

        <div className="w-full text-center text-white flex flex-col gap-1">
          <p>or call us at</p>
          <div className="flex p-2 gap-1 items-center justify-center">
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

            <span className="font-bold">: +61 402 216 349</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default CntctUsHeaderCard;
