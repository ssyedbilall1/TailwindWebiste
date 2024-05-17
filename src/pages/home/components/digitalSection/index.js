import React from "react";
import content from "../../../../assets/img/content.png";
import webDesign from "../../../../assets/img/web-design.png";
import marketing from "../../../../assets/img/marketing.png";
const DigitalSection = () => {
  return (
    <div>
      <section className="bg-custom-grey">
        <div className="container mx-auto flex p-5">
          <span className="w-1/3 text-3xl ">
            Having Digital Services Has Never <br></br>Been
            <span className="text-sky-400 italic "> Easier.</span>
          </span>

          <div className="w-3/4 text-base text-center self-center">
            We're a group of few talent people, who can provide your different
            services.
          </div>
        </div>

        <section className="body-font p-5 ">
          <div className="container p-5 py-10 mx-auto">
            <div className="flex flex-wrap ">
              <div className="p-3 lg:w-1/3 md:w-1/3 w-full ">
                <div className="bg-white border rounded-lg shadow px-8 border-t-custom-blue border-t-8">
                  <div className="h-full overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={content}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3 border-l-custom-blue border-l-8 px-2">
                        Content Writing
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 lg:w-1/3 md:w-1/3">
                <div className=" first-letter:w-full bg-white border rounded-lg shadow px-8 border-t-custom-red border-t-8">
                  <div className="h-full overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={webDesign}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3 border-l-custom-red border-l-8 px-2">
                        Web Designing
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 lg:w-1/3 md:w-1/3 w-full ">
                <div className="bg-white border rounded-lg shadow border-t-custom-green border-t-8">
                  <div className="h-full overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={marketing}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3 border-l-custom-green border-l-8 px-2">
                        SEO
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default DigitalSection;
