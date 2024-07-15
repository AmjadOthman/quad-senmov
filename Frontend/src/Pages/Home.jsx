import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import ImageCard from "../Components/ImageCard";
import "../App.css";

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
        <ImageCard
          title="Launch and Grow Your Business with Our Expert Guidance"
          desc="Are you looking to start your business here in Australia. Senmov Pty
            Ltd is here to help you with various services that will make your
            business ready to start"
        />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
