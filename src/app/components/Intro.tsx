import Image from "next/image";
import React from "react";
import intro_img from "../images/about-img.jpg";

const Intro = () => {
  return (
    <div className="w-full relative py-10 border-slate-800 ">
      <div className="main w-[90%] md:w-3/4 m-auto h-auto flex-col md:flex-row flex justify-center gap-10 items-center p-5 md:p-14 border-slate-950">
        <div className="side-1 md:w-1/2">
          <Image src={intro_img} alt="intro-girl" className="w-96" />
        </div>
        <div className="side-2 md:w-1/2 flex justify-center flex-col">
          <h2 className="text-2xl md:text-4xl text-center font-bold" >Hi, Im Maggie, a Skilled Administrative Support Professional</h2>
          <p className="text-gray-700 my-10 text-center">
            Im a paragraph. Click here to add your own text and edit me. Its
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
          <button className=" px-6 py-3 bg-amber-600">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
