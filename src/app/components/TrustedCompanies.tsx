import React from "react";
import Image from "next/image";

import compani1 from "../images/images/Group.webp";
import compani2 from "../images/images/Beltok.webp";
import compani3 from "../images/images/Ted & Brooks.webp";
import compani4 from "../images/images/Group 21.webp";
import CompanyReview from "./CompanyReview";
import { IconType } from "react-icons";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Business from "./business";

interface CardProps {
  icon: IconType;
  reviewHead: string;
  reviewMessage: string;
  name: string;
  company: string;
}

const CardReview: CardProps[] = [
  {
    icon: BiSolidQuoteAltLeft,
    reviewHead: "Organized and Efficient",
    reviewMessage:
      "״I'm a testimonial. Click to edit me and add text that says something nice about you and your services.״ ",
    name: "Jen B.",
    company: "Milestone",
  },
  {
    icon: BiSolidQuoteAltLeft,
    reviewHead: "Flexible and Committed",
    reviewMessage:
      "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.״ ",
    name: "John D.",
    company: "Tech Solutions",
  },
  {
    icon: BiSolidQuoteAltLeft,
    reviewHead: "Exceptional Experience",
    reviewMessage:
      "Working with this team was a pleasure. Their professionalism and attention to detail are unmatched.",
    name: "Sara K.",
    company: "InnovateX",
  },
];

const TrustedCompanies: React.FC = () => {
  return (
    <>
      <div className="main w-full h-auto bg-slate-800">
        <h2 className="text-white text-center text-2xl md:text-4xl font-bold w-3/4 md:w-1/2 m-auto py-20">
          Trusted by Companies and Entrepreneurs Throughout the Country
        </h2>
        <div className="companies flex flex-wrap justify-evenly w-full pb-60 items-center lg:flex-row flex-col">
          <Image
            src={compani1}
            alt="compani1"
            className="h-24 mb-4 object-contain"
          />
          <Image
            src={compani2}
            alt="compani2"
            className="h-20 mb-4 object-contain"
          />
          <Image
            src={compani3}
            alt="compani3"
            className="h-16 mb-4 object-contain"
          />
          <Image
            src={compani4}
            alt="compani4"
            className="h-24 mb-4 object-contain"
          />
        </div>
      </div>

      <div className=" w-full h-auto bg-slate-200">
        <div className="relative -top-36 flex gap-2 justify-center md:gap-14 flex-wrap">
          {CardReview.map((card, index) => {
            return (
              <CompanyReview
                key={index}
                icon={card.icon}
                reviewHead={card.reviewHead}
                reviewMessage={card.reviewMessage}
                name={card.name}
                company={card.company}
              />
            );
          })}
        </div>
        
        <Business/>
      </div>
    </>
  );
};

export default TrustedCompanies;
