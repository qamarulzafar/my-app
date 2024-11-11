import React from "react";
import { IconType } from "react-icons";

interface CardProps {
  icon: IconType;
  reviewHead: string;
  reviewMessage: string;
  name: string;
  company: string;
}

const CompanyReview: React.FC<CardProps> = ({
  icon: Icon,
  reviewHead,
  reviewMessage,
  company,
  name,
}) => {
  return (
    <div>
      <div className="min-h-[400px]  card w-80 flex  items-center flex-col px-5 py-10 bg-white drop-shadow-md">
        <div className="qutations text-pink-700 text-3xl">
          <Icon />
        </div>
        <div className="review-head">
          <p className="text-2xl my-3"> {reviewHead}</p>
        </div>
        <div className="review-message">
          <p className="font-light text-lg py-3 text-center mx-3">
            {reviewMessage}
          </p>
        </div>
        <div className="name">
          <p className="text-2xl font-normal mt-7">{name}</p>
        </div>
        <div className="company">
          <p className="font-light text-lg">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyReview;
