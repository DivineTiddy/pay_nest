import React from "react";
import Card1 from "../../ui/Cards/Card1";
import {  Element } from "react-scroll";


const data = [
  {
    id: 1,
    icon: "/icon/lightBolt.svg",
    title: "Instant Transfers",
    description:
      "Send and receive money instantly,with zero delays. Whether it's local or cross-border, it's fast and frictionless.",
  },
  {
    id: 2,
    icon: " /icon/pack.svg",
    title: "Full Financial Control",
    description:
      "Track spending, pay bills, and set savings goals, all from your Paynest dashboard. Your money, organized your way.",
  },
  {
    id: 3,
    icon: "/icon/lock.svg",
    title: "Top-Tier Security",
    description:
      "End-to-end encryption and biometric authentication keep your transactions and personal data completely secure.",
  },
  {
    id: 4,
    icon: "/icon/tdDesign.svg",
    title: "Smart, Simple Interface",
    description:
      "Manage your money with ease through a clean, user-friendly design that’s built for speed and clarity.",
  },
];
const WhyPayNest = () => {
  return (
    <Element name="About" className="mt-25 md:mt-40 h-auto text-center  md:flex md:flex-col md:items-center ">
      <h2 className="text-[#2B2B2B] font-semibold font-inter text-2xl md:text-[45px]">
        Why PayNest
      </h2>
      <p className="text-[#767676] font-inter font-normal px-7 md:px-0">
        Built for your peace of mind. Designed for your daily life.
      </p>
      <div className="mt-10 md:mt-20 grid grid-rows-2 gap-4 md:gap-10 md:grid-cols-2 md:w-[70%]">
        {data.map((items) => (
          <Card1
            key={items.id}
            icon={items.icon}
            title={items.title}
            description={items.description}
          />
        ))}
      </div>
    </Element>
  );
};

export default WhyPayNest;
