import React from "react";

import aboutimage from "../assets/aboutimage.png";
import prathamaboutimage from "../assets/prathamabout.png";

const WhoWeAre = () => {
  return (
    <div className="w-full h-full flex flex-col items-center py-12 bg-green-50">
      {/* Container for Image and Text */}
      <div className="flex flex-col lg:flex-row justify-between  py-4 items-center max-w-7xl mx-auto space-y-8 lg:space-y-0 lg:space-x-12 px-6">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={prathamaboutimage}
            alt="About Us"
            className=" max-w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-green-600 mb-6">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Strated work in 2023, Pratham pride ourselves on offering innovative
            digital marketing solutions tailored to our clients’ needs. Pratham
            commitment to quality and affordability sets us apart in the
            competitive digital landscape.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between  my-12 py-4 items-center max-w-7xl mx-auto space-y-8 lg:space-y-0 lg:space-x-12 px-6">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Vision Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-green-500 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Our mission is to drive impactful results for our clients by
              generating high-quality leads, delivering exceptional work, and
              empowering their brands to achieve sustainable growth. We are
              committed to understanding our clients' unique needs and crafting
              strategies that ensure their long-term success in a competitive
              market.
            </p>
          </div>
          {/* Mission Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-green-500 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              To provide the best work at affordable prices while building
              long-lasting relationships with our clients.
            </p>
          </div>

          {/* Core Values Section */}
          <div>
            <h3 className="text-2xl font-semibold text-green-500 mb-4">
              Core Values
            </h3>
            <ul className="text-gray-700 text-base leading-relaxed list-disc list-inside space-y-2">
              <li>Work according to a structured social media calendar.</li>
              <li>Manage all tasks systematically.</li>
              <li>Deliver work on time with excellence.</li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img src={aboutimage} alt="About Us" className=" max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
