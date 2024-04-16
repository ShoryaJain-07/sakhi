import React from "react";
import { Link } from "react-router-dom";
import doctor from "../../assets/doctor.svg";
import offer from "../../assets/offer.svg";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="w-full h-[70vh] flex items-center">
        <div className="w-[60%] text-lg">
          <span className="text-red-400 text-7xl font-bold">
            Welcome to Sakhi
          </span>
          <br />{" "}
          <span className="font-bold text-2xl">
            Your Trusted Companion in Maternal and Child Health
          </span>
          <div className="mt-5">
            At Sakhi, we're dedicated to supporting mothers and promoting the
            health and well-being of children. Explore expert resources,
            practical tools, and community support to navigate your maternal and
            child health journey with confidence.
          </div>
        </div>
        <div className="w-[40%] h-full flex justify-center">
          <img src={doctor} alt="" />
        </div>
      </div>
      <div className="w-full text-lg h-[16vh] flex items-center justify-center">
        <div>Know more ↓ </div>
      </div>
      <div className="w-full mb-20">
        <div className="w-full p-10 flex items-center justify-center text-7xl font-bold">
          What we offer ?
        </div>
        <div className="w-full h-[60vh] flex text-2xl ">
            <div className="w-[60%] p-20 flex justify-center items-center">
                <img src={offer} alt="" />
            </div>
          <div className="w-[40%] text-start mt-20">
            <ul className="text-start mb-5">
              <li>- Expert Articles & Guides</li>
              <li>- Practical Tools & Trackers</li>
              <li>- Supportive Community Forums</li>
              <li>- Trusted Healthcare Directory</li>
            </ul>
            Join us on Sakhi and empower yourself with knowledge and
            resources for a healthier, happier family.
          </div>
        </div>
      </div>
    </div>
  );
}
