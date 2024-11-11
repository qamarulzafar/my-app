import React from "react";
import Service from "./Service";
import { FaRegFolderOpen, FaRegFileAlt, FaRegCalendarAlt } from "react-icons/fa";
import { IconType } from "react-icons";


interface ServiceProps {
    icon: IconType; // React icons type
    title: string;
    description: string;
  }

  
  const servicesData:ServiceProps[] = [
    {
      icon: FaRegFolderOpen,
      title: "Administrative Support",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      icon: FaRegFolderOpen,
      title: "Document Management",
      description:
        "We provide top-notch document management services to help you keep your files organized and accessible.",
    },
    {
      icon: FaRegFolderOpen,
      title: "Calendar Organization",
      description:
        "Keep track of your schedule with our calendar organization services. Stay on top of your tasks and appointments.",
    },
    {
        icon: FaRegFileAlt,
        title: "Document Management",
        description:
          "We provide top-notch document management services to help you keep your files organized and accessible.",
      },
      {
        icon: FaRegCalendarAlt,
        title: "Appointment Scheduling",
        description:
          "Stay on top of your professional and personal appointments with our efficient scheduling services.",
      },
      {
        icon: FaRegFolderOpen,
        title: "Email Management",
        description:
          "We help you organize, prioritize, and respond to emails in an efficient manner, reducing inbox clutter.",
      },
      
  ];


const Services:React.FC = () => {

  return (
    <>
      <div className="w-full">
        <div className="head flex justify-center flex-col mt-12">
          <h2 className="text-center font-bold text-slate-800 text-2xl md:text-4xl">
            What Can I Do For You?
          </h2>
          <p className="font-light text-center mt-7 text:xl md:text-2xl w-3/4  md:w-1/2 mx-auto ">
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
        </div>
        <div className="cards text-center md:text-left mt-20 md:mt-32 flex justify-center items-center p-10 flex-wrap gap-20">
          {servicesData.map((service, index) => {
           return (<Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />)
          })}
        </div>
        <div className="btn flex justify-center mt-12">
            <button className="bg-amber-600 text-white px-8 py-3 mb-10 text-lg">See Pricing Plan</button>
        </div>
      </div>
    </>
  );
};

export default Services;
