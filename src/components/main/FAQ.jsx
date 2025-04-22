import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {  Element } from "react-scroll";


const data = ["General", "Transfer", "Failed Transaction", "Support"];
const accordionData = [
  {
    title: "How secure is Paynest?",
    describetion:
      "Paynest uses bank-grade encryption, biometric authentication, and real-time fraud monitoring to keep your money and personal information safe at all times.",
  },
  {
    title: "How secure is Paynest?",
    describetion:
      "Paynest uses bank-grade encryption, biometric authentication, and real-time fraud monitoring to keep your money and personal information safe at all times.",
  },
  {
    title: "How secure is Paynest?",
    describetion:
      "Paynest uses bank-grade encryption, biometric authentication, and real-time fraud monitoring to keep your money and personal information safe at all times.",
  },
  {
    title: "Can I send money to someone who doesn’t use Paynest?",
    describetion:
      "Paynest uses bank-grade encryption, biometric authentication, and real-time fraud monitoring to keep your money and personal information safe at all times.",
  },
  {
    title: "What fees should I expect when using Paynest?",
    describetion:
      "Paynest uses bank-grade encryption, biometric authentication, and real-time fraud monitoring to keep your money and personal information safe at all times.",
  },

];

const FAQ = () => {
  const [click, setClick] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(1);
  // const [more, setMore] = useState(false);

  return (
    <Element name="Blogs" className="mt-30  md:justify-center flex flex-col items-center">
      <div className="text-center space-y-5 md:space-y-9 md:w-[45%]">
        <h1 className="text-[#2B2B2B] font-inter font-bold text-[24px] px-10 md:px-0 md:text-[45px] leading-8 md:leading-13">
          Frequently Asked Questions{" "}
        </h1>
        <p className="text-[#767676] px-7 md:px-0 text-sm font-normal font-inter">
          We have answers to all your possible questions. If you have more
          questions not listed here, then reach out to us through the contact us
          page.
        </p>
        <div className="flex justify-between items-center mt-10  ">
          {data.map((item, index) => (
            <button
              key={index + 1}
              onClick={() => setClick(index + 1)}
              className={`border-[1px] hover:border-[#474ED3] hover:text-[#474ED3] duration-300 ease-in-out  cursor-pointer font-bold font-inter rounded-full py-2 md:py-3 px-4.5 text-[10px] md:text-xs ${
                click == index + 1
                  ? "border-[#474ED3] text-[#474ED3]"
                  : " border-[#DADADA] text-[#AEAEAE]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {/* accordion */}
      <Accordion
        type="single"
        collapsible
        className={`w-full text-black mt-5 md:mt-10 space-y-3  py-5 md:px-20 `}
      >
        {accordionData.map((items, index) => (
          <AccordionItem
            key={index + 1}
            onClick={() => setOpenAccordion(index + 1)}
            value={index + 1}
            className={`border-[1px] border-[#E6E6E6] font-inter  rounded-lg px-5 md:px-10 py-2  ${
              openAccordion == index + 1
                ? "bg-[#F0F1FF] border-[#474ED3] text-[#71738F]"
                : "text-[#2B2B2B]"
            }`}
          >
            <AccordionTrigger
              className={`py-4 cursor-pointer font-semibold text-base ${
                openAccordion == index + 1 ? "text-[#474ED3]" : ""
              }`}
            >
              {items.title}
            </AccordionTrigger>
            <AccordionContent>{items.describetion}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <button
        className="bg-[#474ED3] text-[#F0F1FF] mt-8 font-inter font-bold rounded-sm px-5 py-2 cursor-pointer"
      >
        See More
      </button>
    </Element>
  );
};

export default FAQ;
