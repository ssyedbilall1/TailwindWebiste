import React from "react";

const cardList = ({
  title,
  description,
  image,
  borderColorLeft,
  borderColorTop,
}) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/3 w-full clip-path">
      <div
        className={`bg-white border rounded-lg shadow px-8 ${borderColorTop} border-t-8`}
      >
        <div className="h-full overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={image}
            alt={title}
          />
          <div className="p-6">
            <h1
              className={`title-font text-lg font-medium text-gray-900 mb-3 ${borderColorLeft} border-l-8 px-2`}
            >
              {title}
            </h1>
            <p className="leading-relaxed mb-3">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardList;
