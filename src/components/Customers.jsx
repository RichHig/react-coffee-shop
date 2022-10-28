import React from "react";
import { AiFillStar } from "react-icons/ai";
import Bob from "../assets/rev1.jpg";
import Sam from "../assets/rev2.jpg";
import Jess from "../assets/rev3.jpg";
import "./Customers.css";

const Customers = () => {
  return (
    <section className="customers">
      <div className="heading">
        <h2>Our Customer's </h2>
      </div>
      {/* container  */}
      <div className="customers-container">
        <div className="box">
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p>
            This is certainly a coffee worth trying. It has a distinctive and
            original flavour (in a good way!) that makes it worth purchasing. I
            would definitely recommend this cofffee to fans who would like
            something a bit different!
          </p>
          <h2>Bob Dylan</h2>
          <img src={Bob} alt="" />
        </div>
        <div className="box">
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p>
            I like this coffee it's really smooth and has an after taste of
            chocolate. Service was brilliant and the coffee was delivered the
            day after I ordered it and was ground perfectly for the Cafetiere.
            :) I will be ordering again.
          </p>
          <h2>Sam Smith</h2>
          <img src={Sam} alt="" />
        </div>
        <div className="box">
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p>
            A lovely chocolate flavoured coffee, I enjoy this one at anytime of
            day, friends have loved this one to. Only problem they want more,
            its not a problem for long though, as your service is so quick, dont
            need to be without!
          </p>
          <h2>Jessica Luck</h2>
          <img src={Jess} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Customers;
