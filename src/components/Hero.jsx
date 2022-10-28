import React from "react";
import "./Hero.css";
import MainImg from "../assets/main.png";

const Hero = () => {
  return (
    <section className="home">
      <div className="home-text">
        <h1>Start your day with coffee</h1>
        <p>
          It is just a moment in time, just one hand reaching over the counter
          to present a cup to another outstretched hand. But it is a connection!
          We make sure everything we do honours that connection, from our
          commitment to the highest quality coffee in the world, to the way we
          engage with our customers and communities to do business responsibly.
        </p>
        <a href="#hero-menu" className="btn">
          Shop Now
        </a>
      </div>
      <div className="home-img">
        <img src={MainImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
