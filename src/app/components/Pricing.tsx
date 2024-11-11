import React from "react";
import Pricingcards from "./Pricing-cards";

const Pricing = () => {
  return (
    <div>
      <div className="pricing w-full bg-slate-200">
        <div className="pricing-head flex justify-center items-center flex-col">
          <h2 className="mt-20 text-4xl font-bold text-slate-800">
            Pricing Plan
          </h2>
          <p className="font-light w-3/4 md:w-1/2 my-8 text-center text:xl md:text-2xl ">
            m a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
        </div>
        <div className="propsCard flex flex-wrap pb-32 mt-16 justify-center gap-5">
          <Pricingcards
            plan="Basic Plan"
            price="250"
            duration="15 Hour a month"
            validity="Valid for a month"
            button="Select"
          />
          <Pricingcards
            plan="Advance Plan"
            price="450"
            duration="30 Hour a month"
            validity="Valid for a month"
            button="Select"
          />
          <Pricingcards
            plan="Tailored Plan"
            price="350"
            duration="Suitable For Your Needs"
            validity="Valid for a month"
            button="Select"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
