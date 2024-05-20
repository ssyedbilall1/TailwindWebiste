import React from "react";
import CardList from "./cardList";
import digitalData from "../../../../../src/websiteData";

const DigitalSection = () => (
  <div className="p-5 bg-custom-grey backgroundClipPath">
    <div className="container mx-auto p-5">
      <div className="text-3xl w-full text-center mb-8">
        Having Digital Services Has Never <br /> Been
        <span className="text-sky-400 italic"> Easier.</span>
      </div>
      <div className="w-full text-base text-center mb-12">
        We're a group of few talented people who can provide your different
        services.
      </div>
      <div className="flex flex-wrap">
        {digitalData.map((item) => (
          <CardList
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            borderColorTop={item.borderColorTop}
            borderColorLeft={item.borderColorLeft}
          />
        ))}
      </div>
    </div>
  </div>
);

export default DigitalSection;
