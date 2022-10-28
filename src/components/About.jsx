import React from "react";
import Coffee from "../assets/about.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-img">
        <img src={Coffee} alt="" />
      </div>
      <div className="about-text">
        <h2>Our History</h2>
        <p>
          Our mission is to fundamentally change the way coffee beans are traded
          to support farmers and their communities, solving the problems of lack
          of education, health services, and life opportunities.
        </p>
        <p>
          The way we do this is by paying above market price to our farmers to
          ensure they receive enough to cover all production costs and improve
          their livelihoods by being able to support their families and grow
          their business.
        </p>
        <p>
          Our philosophy leads us to believe that if our coffee drinkers know
          more about the communities that make their coffee and that their
          purchase has made a positive difference to someone’s life, their
          coffee will taste even better.
        </p>
        <a href="/" className="btn">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default About;
