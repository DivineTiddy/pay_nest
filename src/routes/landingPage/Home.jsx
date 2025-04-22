import React from "react";
import Hero from "../../components/hero/Hero";
import WhyPayNest from "../../components/main/WhyPayNest";
import Intro from "../../components/main/Intro";
import FAQ from "../../components/main/FAQ";
import Footer from "@/components/footer/Footer";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home = () => {
  return (
      <div className="h-auto  text-white ">
        <LazyLoadImage
          src="\image\curveImage.svg"
          className="relative w-[15%] md:w-[10%]"
          alt="image"

        />
        <div className=" z-40 absolute top-[0%]">
          <div className="px-3 lg:px-25  overflow-hidden">
            <Hero />
            <WhyPayNest />
            <Intro />
            <FAQ />
          </div>
          <Footer />
        </div>
      </div>
  );
};

export default Home;
