import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import HeaderCard from "../Components/HeaderCard";
import "../App.css";
import RightImageCard from "../Components/RightImageCard";
import LeftImageCard from "../Components/LeftImageCard";

function Home() {
  return (
    <div>
      {/**
       * 
       * <Card
        title="Nominee Director Appointments"
        desc="Fulfill legal requirements and gain a local presence with our
          experienced Nominee Directors."
      />
       */}
      <Header />
      <div>
        <HeaderCard
          title="Launch and Grow Your Business with Our Expert Guidance"
          desc="Are you looking to start your business here in Australia. Senmov Pty
            Ltd is here to help you with various services that will make your
            business ready to start"
          imgUrl="https://e0.pxfuel.com/wallpapers/1001/63/desktop-wallpaper-company-company.jpg"
        />
      </div>

      <div className="bg-white w-screen pb-10">
        <div className="lg:max-w-7xl mx-auto flex flex-col items-center justify-center m-4 ">
          <h2 className="text-gray-700 font-bold text-3xl lg:text-5xl mt-20 mx-2 text-center mb-5">
            Our Services
          </h2>
          <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-1">
            <Card
              title="Nominee Director Appointments"
              desc="Fulfill legal requirements and gain a local presence with our experienced Nominee Directors."
            />
            <Card
              title="Compliance Management"
              desc="Stay on the right side of the law with our proactive approach to compliance management."
            />
            <Card
              title="Strategic Advisory"
              desc="Beyond compliance, our Nominee Directors provide strategic insights to drive business success."
            />
          </div>
        </div>
        <h2 className="text-gray-700 font-bold text-3xl lg:text-5xl mt-20 mx-2 text-center mb-5">
          Why Choose a Nominee Director?
        </h2>
        <div className="flex flex-col justify-center items-center mx-2 w-full">
          <RightImageCard
            title="Smooth Business Operations"
            desc="Our experienced nominee directors understand the nuances of Australian business operations. They can act on your behalf in meetings, make executive decisions, and handle administrative tasks, ensuring that your business runs smoothly and efficiently"
            imgUrl="https://e0.pxfuel.com/wallpapers/1001/63/desktop-wallpaper-company-company.jpg"
          />
          <LeftImageCard
            title="Smooth Business Operations"
            desc="Our experienced nominee directors understand the nuances of Australian business operations. They can act on your behalf in meetings, make executive decisions, and handle administrative tasks, ensuring that your business runs smoothly and efficiently"
            imgUrl="https://e0.pxfuel.com/wallpapers/1001/63/desktop-wallpaper-company-company.jpg"
          />
          <RightImageCard
            title="Smooth Business Operations"
            desc="Our experienced nominee directors understand the nuances of Australian business operations. They can act on your behalf in meetings, make executive decisions, and handle administrative tasks, ensuring that your business runs smoothly and efficiently"
            imgUrl="https://e0.pxfuel.com/wallpapers/1001/63/desktop-wallpaper-company-company.jpg"
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
            <a className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer shadow-lg flex justify-center items-center">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
