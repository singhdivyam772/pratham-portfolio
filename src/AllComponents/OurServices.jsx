import React from "react";

const OurServices = () => {
  return (
    <div className="flex flex-col w-full my-4">
      <h2 className="text-6xl font-bold text-center text-green-600 my-6">
        Our Services
      </h2>

      <div className="flex flex-col lg:flex-row justify-between my-12 py-4 items-center max-w-7xl mx-auto space-y-8 lg:space-y-0 lg:space-x-12 px-6">
        {/* Social Media Marketing */}
        <div className="border-2 border-green-400 rounded-2xl w-[24rem] h-[26rem] p-6 shadow-lg shadow-green-400 flex flex-col items-start">
          <h1 className="text-green-600 text-5xl font-semibold mb-2">
            Social Media Marketing
          </h1>
          <p className="text-gray-700 text-lg">
            Create and manage engaging campaigns on platforms like Instagram,
            Facebook, and LinkedIn to grow brand visibility and engagement.
          </p>
        </div>

        {/* Search Engine Marketing */}
        <div className="border-2 border-green-400 rounded-2xl w-[24rem] h-[26rem] p-6 shadow-lg shadow-green-400 flex flex-col items-start">
          <h1 className="text-green-600 text-5xl font-semibold mb-2">
            Search Engine Marketing
          </h1>
          <p className="text-gray-700 text-lg">
            Design cost-effective ad campaigns to improve website traffic and
            generate leads through Google Ads and similar platforms.
          </p>
        </div>

        {/* Website Development */}
        <div className="border-2 border-green-400 rounded-2xl w-[24rem] min-h-[26rem] p-6 shadow-lg shadow-green-400 flex flex-col items-start">
          <h1 className="text-green-600 text-5xl font-semibold mb-2">
            Website Development
          </h1>
          <p className="text-gray-700 text-lg">
            Build responsive, user-friendly websites tailored to client goals,
            ensuring a strong online presence. We focus on modern design
            principles, seamless navigation, and optimized performance to create
            websites that engage users and drive results. From e-commerce
            functionality to mobile compatibility, our solutions are crafted to
            meet your unique needs and help you thrive in a competitive digital
            landscape.
          </p>
        </div>

        {/* Graphic Design */}
        <div className="border-2 border-green-400 rounded-2xl w-[24rem] h-[26rem] p-6 shadow-lg shadow-green-400 flex flex-col items-start">
          <h1 className="text-green-600 text-5xl font-semibold mb-2">
            Graphic Design
          </h1>
          <p className="text-gray-700 text-lg">
            Deliver visually compelling designs, including social media posts,
            banners, logos, and other creative assets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
