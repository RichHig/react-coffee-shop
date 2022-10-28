import React from "react";
import "./Footer.css";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsEnvelope,
  BsTelephoneFill,
  BsMap,
} from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-box">
        <h2>Coffee Shop</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          consequuntur eum facilis atque ipsa rerum debitis delectus nihil
          possimus sit quidem, recusandae corrupti aperiam vitae voluptatibus
          voluptatem inventore, tempora cum.
        </p>
        <div className="social">
          <a href="/">
            <BsFacebook />
          </a>
          <a href="/">
            <BsTwitter />
          </a>
          <a href="/">
            <BsInstagram />
          </a>
          <a href="/">
            <BsLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-box">
        <h3>Support</h3>
        <li>
          <a href="/">Product</a>
        </li>
        <li>
          <a href="/">Help & Support</a>
        </li>
        <li>
          <a href="/">Return Policy</a>
        </li>
        <li>
          <a href="/">Terms of Use</a>
        </li>
      </div>
      <div className="footer-box">
        <h3>View Guides</h3>
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Careers</a>
        </li>
        <li>
          <a href="/">Blog Posts</a>
        </li>
        <li>
          <a href="/">Our Branches</a>
        </li>
      </div>
      <div className="footer-box">
        <h3>Contact</h3>
        <div className="contact">
          <span>
            <BsMap className="emo" />
            Number 10 London, United Kingdom
          </span>
          <span>
            <BsTelephoneFill className="emo" />
            +44 777897779
          </span>
          <span>
            <BsEnvelope className="emo" />
            coffee@shopcoffee.com
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
