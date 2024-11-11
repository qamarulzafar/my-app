import React from "react";
import { IconType } from "react-icons";

interface ServiceProps {
    icon: IconType;
    title: string;
    description: string;
  }

const Service: React.FC<ServiceProps> = ({icon: Icon, title, description}) => {
  return (
    <div>
      <div className="card w-80">
        <Icon className="text-4xl mb-4" />
        <h2 className="text-2xl font-normal mb-4">{title}</h2>
        <p className="font-light text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Service;
