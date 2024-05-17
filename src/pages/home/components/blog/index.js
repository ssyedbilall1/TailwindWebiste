import React from "react";
import green from "../../../../assets/img/green.png";
import profile from "../../../../assets/img/profile.jpg";
const Blog = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-center text-4xl font-bold	mt-5">Blog</h1>

      <section className="text-gray-600 body-font">
        <div className="px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover"
                  src={green}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg text-gray-900 mb-3 font-bold">
                    Keyword Research: The Definitive Guide(2020 Updated)
                  </h1>

                  <div className="flex items-center flex-wrap">
                    <img
                      alt="blog"
                      src={profile}
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900">
                        Olivia
                      </span>
                    </span>
                    <span>Last updated: March 1, 2020</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover"
                  src={green}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg text-gray-900 mb-3 font-bold">
                    Keyword Research: The Definitive Guide(2020 Updated)
                  </h1>

                  <div className="flex items-center flex-wrap">
                    <img
                      alt="blog"
                      src={profile}
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900">
                        Olivia
                      </span>
                    </span>
                    <span>Last updated: March 1, 2020</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover"
                  src={green}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg text-gray-900 mb-3 font-bold">
                    Keyword Research: The Definitive Guide(2020 Updated)
                  </h1>

                  <div className="flex items-center flex-wrap">
                    <img
                      alt="blog"
                      src={profile}
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900">
                        Olivia
                      </span>
                    </span>
                    <span>Last updated: March 1, 2020</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover"
                  src={green}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg text-gray-900 mb-3 font-bold">
                    Keyword Research: The Definitive Guide(2020 Updated)
                  </h1>

                  <div className="flex items-center flex-wrap">
                    <img
                      alt="blog"
                      src={profile}
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900">
                        Olivia
                      </span>
                    </span>
                    <span>Last updated: March 1, 2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blog;
