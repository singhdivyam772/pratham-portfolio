"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";

export function HeroSlider() {
  const images = [
    "https://cdn.pixabay.com/photo/2019/09/09/08/23/internet-4463031_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/12/09/03/10/digital-marketing-5816304_640.jpg",
    "https://media.istockphoto.com/id/1888615074/vector/web-developer-writing-code-or-program-using-laptop-computer-programming-java-html-symbols.jpg?s=612x612&w=0&k=20&c=V3gZD8y7T5rFUx-X1gkY_-Xnu7kyYhKp5BFLdfQYJQs=",
  ];
  return (
    <ImagesSlider className="h-[43.8rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-emerald-50 to-emerald-500 py-4">
          Pratham ke Saath <br /> Digital Marketing ki Raah!
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
