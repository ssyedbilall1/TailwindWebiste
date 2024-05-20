import React from "react";

const BlogList = ({ title, name, date, image, profileImg }) => {
  return (
    <div className="p-2 md:w-1/2 ">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover"
          src={image}
          alt={title}
        />
        <div className="p-7">
          <h1 className="title-font text-lg text-gray-900 mb-3 font-bold">
            {title}
          </h1>

          <div className="flex items-center flex-wrap">
            <img
              src={profileImg}
              alt={title}
              class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">{name}</span>
            </span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
