import React from "react";
import Top from "../components/Top";
import ServicesIOffer from "../components/ServicesIOffer";
import { IconType } from "react-icons";
import {
  FaRegFileAlt,
  FaHeadset,
  FaTasks,
  FaBullhorn,
  FaDatabase,
  FaUserTie,
} from "react-icons/fa";
import Pricing from "../components/Pricing";

interface ServiceOfferProps {
  Icon: IconType;
  Name: string;
  des: string;
}

const ServiceOffer = [
  {
    Icon: FaRegFileAlt,
    Name: "Administrative Support",
    des: "We provide comprehensive administrative support, helping businesses manage day-to-day tasks efficiently. From handling documentation to organizing schedules, our services ensure smooth operations, allowing you to focus on growth and strategy.",
  },
  {
    Icon: FaHeadset,
    Name: "Customer Support",
    des: "Our customer support service ensures timely and professional responses to client queries. We help businesses build trust and satisfaction by managing communication channels, resolving issues, and maintaining strong customer relationships.",
  },
  {
    Icon: FaTasks,
    Name: "Project Management",
    des: "Our project management services help you stay on track with clear goals, timelines, and resource allocation. We coordinate between teams and stakeholders to ensure your projects are completed on time and within budget.",
  },
  {
    Icon: FaBullhorn,
    Name: "Social Media Management",
    des: "Our social media management service helps build and engage your online audience. We create compelling content, manage posts, and analyze engagement to ensure your brand stays relevant and visible across all social platforms.",
  },
  {
    Icon: FaDatabase,
    Name: "Data & Research",
    des: "Our data and research services provide businesses with insights based on thorough analysis. Whether it’s market trends or customer behavior, we help you make informed decisions through accurate and up-to-date research data.",
  },
  {
    Icon: FaUserTie,
    Name: "Personal Assistant",
    des: "Our personal assistant services offer tailored support to executives and professionals. From managing calendars to handling communications, we ensure that your day-to-day tasks are organized and stress-free, improving productivity.",
  },
];

const Page: React.FC = () => {
  return (
    <div>
      <Top title="Service And Pricing" />
      <div className="head flex justify-center items-center mt-36 mb-28 font-light text-xl md:text-2xl w-3/4 md:w-1/2 text-center m-auto">
        <h2>
          Im a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </h2>
      </div>
        <h2 className="text-center text-slate-800 font-bold text-4xl mb-28">Service I Offer</h2>

      {/* SERVICE I OFFER  */}

      <div className="flex flex-wrap w-full my-10 justify-center gap-100 md:gap-20">
        {ServiceOffer.map((serviceoffer, ind) => {
          return (
            <ServicesIOffer
              key={ind}
              Icon={serviceoffer.Icon}
              Name={serviceoffer.Name}
              des={serviceoffer.des}
            />
          );
        })}
      </div>

        {/* pricing  */}

      <div className="pricing">
        <Pricing/>
      </div>
    </div>
  );
};

export default Page;
