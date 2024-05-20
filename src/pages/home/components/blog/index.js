import React from "react";
import BlogList from "./blogList";
import { blogData } from "../../../../websiteData";

const Blog = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-center text-4xl font-bold mt-5">Blog</h1>

      <section className="text-gray-600 body-font">
        <div className="px-5 py-10 mx-auto">
          <div className="flex flex-wrap">
            {blogData.map((item) => (
              <BlogList
                key={item.id}
                title={item.title}
                name={item.name}
                date={item.date}
                image={item.image}
                profileImg={item.profileImg}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blog;
