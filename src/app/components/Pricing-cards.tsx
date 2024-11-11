import React from "react";


interface PricingCardProps {
  plan: string;
  price: number | string; // Adjust the type as needed
  duration: string;
  validity: string;
  button: string;
}

const Pricingcards = (props: PricingCardProps) => {
  return (
    <div>
      <div className="pricingCard w-72 border-slate-800 bg-white p-5 flex flex-col justify-center items-center">
        <div className="plans">
          <p className="text-2xl my-5">{props.plan}</p>
        </div>
        <div className="price">
          <p className="text-7xl"> <span className="text-3xl relative -top-8" >$</span>{props.price}</p>
        </div>
        <div className="duration"><p className="font-light my-6">{props.duration}</p></div>
        <div className="validaty"><p className="font-light text-sm">{props.validity}</p></div>
        <button className="px-20 bg-slate-800 py-3 text-white mt-5">{props.button}</button>
      </div>
    </div>
  );
};

export default Pricingcards;
