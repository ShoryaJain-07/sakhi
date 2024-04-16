import React from 'react'
import about from '../../assets/about.svg'
import mission from '../../assets/mission.svg'

const About = () => {
  return (
    <>
      <div className="w-full p-10 text-2xl font-bold">
        <span className="text-red-400 text-4xl">Welcome to Sakhi</span>
        <br /> Your Trusted Companion in Maternal and Child Health
      </div>
      <div className="w-full flex mb-20">
        <div className="w-[40%] h-[60vh] flex justify-center items-center mr-20">
          <img src={about} alt="" />
        </div>
        <div className="w-[50%] text-start p-10 text-xl flex items-center">
          At Sakhi, we understand the unique journey of motherhood and the
          importance of ensuring the health and well-being of both mothers and
          their children. That's why we've created a comprehensive healthcare
          information portal dedicated to providing mothers with the support and
          resources they need to navigate the challenges of maternal and child
          health with confidence and ease.
        </div>
      </div>
      <div className="w-full flex mb-20">
        <div className="w-[50%] text-end p-10 text-xl flex items-center">
          Our mission at Sakhi is simple yet profound: to empower mothers with
          knowledge and resources that promote maternal and child health, foster
          well-being, and nurture healthy families. We believe that by equipping
          mothers with accurate information and reliable resources, we can make
          a positive impact on the health and happiness of families everywhere.
        </div>
        <div className="w-[40%] h-[60vh] flex justify-center items-center ml-20 p-12">
          <img src={mission} alt="" />
        </div>
      </div>
    </>
  );
}

export default About