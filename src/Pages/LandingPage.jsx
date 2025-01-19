import { HeroSlider } from "@/AllComponents/HeroSlider";
import Navbar from "@/AllComponents/Navbar";
import OurPackages from "@/AllComponents/OurPackages";
import OurServices from "@/AllComponents/OurServices";
import WhoWeAre from "@/AllComponents/WhoWeAre";
import React from "react";

const LandingPage = () => {
  return (
    <div className=" w-full h-full">
      <Navbar />
      <HeroSlider />
      <WhoWeAre />
      <OurServices />
      <OurPackages />
    </div>
  );
};

export default LandingPage;
