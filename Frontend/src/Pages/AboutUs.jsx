import React, { useEffect } from "react";
import TitleCard from "../Components/TitleCard";
import Header from "../Components/Header";
import ToggleElement from "../Components/ToggleElement";
import ImageUrl from "../../src/assets/about_us_page.jpg";
import Footer from "../Components/Footer";
import { Element, Link, animateScroll } from "react-scroll";
function AboutUs() {
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);

  return (
    <>
      <Header />
      <Link to="scrollToDiv" smooth={true} duration={800}>
        <TitleCard title="About Us" imgUrl={ImageUrl} />
      </Link>
      <Element name="scrollToDiv">
        <div className=" bg-white w-screen pb-10 flex flex-col items-center justify-center  gap-5">
          <div className=" justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 mt-20 text-left">
            Welcome to Primerise Pty Ltd, your premier partner for Nominee
            Director Services in Australia. With a commitment to excellence,
            compliance, and strategic business support, we are your gateway to a
            seamless and successful expansion into the Australian market.
          </div>

          <div className=" lg:max-w-7xl mx-auto flex flex-col items-center justify-center">
            <h2 className="text-gray-700 font-bold text-3xl lg:text-5xl mt-20 mb-5">
              Who We Are?
            </h2>
            <p className="justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 text-left">
              At Primerise Pty Ltd, we are a team of dedicated professionals
              with a passion for facilitating business growth. With years of
              experience in Australian corporate governance, we understand the
              challenges and opportunities that come with establishing and
              operating a business in this dynamic market.
            </p>
          </div>

          <div className=" lg:max-w-7xl mx-auto flex flex-col items-center justify-center">
            <h2 className="text-gray-700 font-bold text-3xl lg:text-5xl mt-20 mb-5">
              Our Mission
            </h2>
            <p className="justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 text-left">
              Empowering Your Business Success: We are driven by a mission to
              empower businesses by providing expert Nominee Director Services.
              Our goal is to go beyond compliance, offering strategic guidance
              and support to help you navigate the complexities of the
              Australian business landscape.
            </p>
          </div>
          <div className="w-full justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2  text-left">
            <h2 className="text-gray-700 font-bold text-3xl lg:text-5xl mt-20 mb-5">
              Why choose Primerise Pty Ltd?
            </h2>

            <ToggleElement
              order="1"
              title="Expertize That Counts"
              desc="Our team comprises seasoned professionals with a deep understanding of Australian corporate laws and regulations. We leverage our expertise to ensure your business operates smoothly within the legal framework."
            />
            <ToggleElement
              order="2"
              title="Tailord Solutions"
              desc="Recognizing that each business is unique, we provide personalized Nominee Director Services. Whether you are a multinational corporation or a start-up, we tailor our solutions to meet your specific needs and goals."
            />
            <ToggleElement
              order="3"
              title="Compliance Excellence"
              desc="Compliance is at the core of our services. We keep your business fully compliant with Australian regulations, allowing you to focus on your core activities with confidence."
            />
            <ToggleElement
              order="4"
              title="Stratigic Partnership"
              desc="Beyond compliance, we aim to be your strategic partner in business success Our Nominee Directors offer strategic insights and support, contributing to the growth and sustainability of your venture.
"
            />
          </div>
          <div className=" lg:max-w-7xl mx-auto flex flex-col items-center justify-center">
            <h2 className="text-gray-700 font-bold text-3xl lg:text-5xl mt-20 mx-2 text-center mb-5">
              Work with us
            </h2>
            <p className="text-gray-700 text-xl m-5 text-center">
              Ready to embark on your Australian business journey?
            </p>
            <div className="mt-6 flex justify-center items-center">
              <a
                href="/services"
                className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer shadow-lg flex justify-center items-center"
              >
                Learn More About Services
              </a>
            </div>
          </div>
        </div>
      </Element>
      <Footer />
    </>
  );
}

export default AboutUs;
