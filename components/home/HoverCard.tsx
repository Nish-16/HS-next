"use client";

import { useState } from "react";

interface HoverCardProps {
  title: string;
  description: string;
  backgroundColor?: string;
  cardColor?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({
  title,
  description,
  backgroundColor = "bg-[#9CBDFF]",
  cardColor = "bg-gradient-to-b from-white/20 to-white/10",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative overflow-hidden w-64 h-64 rounded-3xl cursor-pointer text-lg font-bold ${cardColor}
      transition-transform duration-500 hover:scale-105`}
      onClick={() => {
        if (typeof window !== "undefined" && window.innerWidth < 768) {
          setIsOpen((prev) => !prev);
        }
      }}
    >
      {/* For md+ hover trigger */}
      <div className="z-10 absolute w-full h-full peer md:block hidden" />

      {/* Top bubble */}
      <div
        className={`absolute -top-32 -left-16 w-32 h-44 rounded-full ${backgroundColor}
        opacity-0 md:peer-hover:opacity-100 transition-all duration-500
        md:peer-hover:-top-20 md:peer-hover:-left-16 md:peer-hover:w-[140%] md:peer-hover:h-[140%]
        ${isOpen ? "opacity-100 -top-20 -left-16 w-[140%] h-[140%]" : ""} md:opacity-0`}
      />

      {/* Content bubble */}
      <div
        className={`absolute flex flex-col text-center
        -bottom-32 -right-16 w-36 h-44 rounded-full ${backgroundColor}
        opacity-0 md:peer-hover:opacity-100 transition-all duration-500
        md:peer-hover:right-0 md:peer-hover:bottom-0 md:peer-hover:rounded-b-none
        md:peer-hover:items-center md:peer-hover:justify-center md:peer-hover:w-full md:peer-hover:h-full md:peer-hover:p-6
        ${
          isOpen
            ? "opacity-100 right-0 bottom-0 rounded-b-none items-center justify-center w-full h-full p-6"
            : ""
        } md:opacity-0`}
      >
        <div className="font-avenir-regular font-bold text-xl break-words mb-3">
          {title}
        </div>
        <div className="font-avenir-regular text-xs font-medium mt-2 break-words">
          {description}
        </div>
      </div>

      {/* Always-visible title */}
      <div className="w-full h-full items-center justify-center flex text-center px-4">
        <span className="break-words">{title}</span>
      </div>
    </div>
  );
};

export default HoverCard;
