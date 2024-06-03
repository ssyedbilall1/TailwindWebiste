import React from "react";

const titleShortner = (title, limit) => {
  return title.length > limit ? title.substring(0, limit) + "..." : title;
};

const descriptionShortner = (description, charLimit) => {
  return description.length > charLimit
    ? description.substring(0, charLimit) + "..."
    : description;
};

const Cards = ({ title, description, price, image }) => {
  return (
    <>
      <div className="max-w-xs bg-white rounded-lg shadow-xl dark:bg-gray-800 p-5 m-2">
        <img
          className="object-contain w-full h-60 mt-2"
          src={image}
          alt={title}
        />
        <div className="px-4 py-2">
          <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
            {titleShortner(title, 17)}
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {descriptionShortner(description, 50)}
          </p>
        </div>

        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-lg font-bold text-white">${price}</h1>
          <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
