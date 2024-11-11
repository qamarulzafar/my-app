import Image from "next/image";
import React from "react";
import hero_img from "../images/hero-bg.jpg";
import laptop from '../images/laptop.jpg'
import bg from '../images/bg.jpg'

const Hero = () => {
  return (
    <div>
      <div className="hero relative">
        <Image src={bg} alt="Hero-img"  className="w-full absolute h-screen"   />
        <div className="center relative flex justify-center flex-col text-white items-center h-screen">
            <div className="head">
                <h2 className="text-4xl w-3/4 sm:text-5xl md:text-6xl md:w-1/2 text-center font m-auto font-bold">Virtual Assistant 
                at Your Service</h2>
            </div>
            <div className="para">
                <p className=" my-5 md:my-7 md:text-2xl font-light">Im a title. ​Click here to edit me.</p>
            </div>
            <div className="button">
                <button className="px-6 py-3 bg-amber-600">See Services</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
