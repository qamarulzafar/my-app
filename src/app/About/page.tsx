import React from "react";
import Top from "../components/Top";
import Image from "next/image";
import about_img from "../images/about-img.webp"


const page = () => {
  return (
    <div>
      <Top title="About" />
      <div className="about my-32 flex w-full justify-center gap-10 items-center px-8  flex-col md:flex-row ">
        <div className="img">
          <Image src={about_img} alt="abou_girl" width={400} />
        </div>
        <div className="text w-4/5 text-center md:text-left  md:w-1/2">
          <h2 className="text-2xl my-8">
            About Skilled Administrative Support Professional with 10 Years'
            Experience
          </h2>
          <p className="font-light text-lg">
            I'm a paragraph. Click here to add your own text and edit me. Its
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. Im a great place for you to tell a
            story and let your users know a little more about you.
            <br /><br />
             This is a
            great space to write a long text about your company and your
            services. You can use this space to go into a little more detail
            about your company. Talk about your team and what services you
            provide. Tell your visitors the story of how you came up with the
            idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
