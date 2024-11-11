import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IconType } from "react-icons";

interface ServiceOfferProps {
  Icon: IconType;
  Name: string;
  des: string;
}

const ServicesIOffer: React.FC<ServiceOfferProps> = ({
  Icon: Icon,
  Name,
  des,
}) => {
  return (
    <div>
      {/* <h2 className="text-center text-4xl font-bold">Services I Offer</h2> */}

      <div className="serviceCard w-80 p-5">
        <div className="icon">
          <Icon className="text-3xl" />
        </div>
        <div className="serviceName">
          <h2 className="text-2xl my-4">{Name}</h2>
        </div>
        <div className="serviceDes">
          <h2 className="font-light text-lg">{des}</h2>
        </div>
      </div>
    </div>
  );
};

export default ServicesIOffer;
