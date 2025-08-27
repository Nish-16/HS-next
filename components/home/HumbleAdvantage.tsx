"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import HoverCard from "./HoverCard";
import bgImage from "../../public/photos/humble-bg.png"; // ✅ imported background

const HumbleAdvantage = () => {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="about"
      className="w-full py-20 px-6 text-white bg-cover relative z-10 bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }} // ✅ use .src from imported file
    >
      <div className="max-w-7xl mx-auto text-center">
        <div ref={headingRef}>
          <h3 className="font-avenir-regular text-lg font-medium mb-5">
            Three Pillars That Propel Your Project From Vision To Victory.
          </h3>
          <h2 className="text-4xl md:text-5xl font-semibold">
            The{" "}
            <span className="font-avenir-regular text-blue-400">Humble</span>{" "}
            Advantage
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="mt-16 flex flex-wrap justify-center gap-8 mb-10"
        >
          <HoverCard
            title="Transparent Collaboration & Accountability"
            description="Open communication, shared responsibility, and clarity at every step."
          />
          <HoverCard
            title="Outcome-Driven Innovation"
            description="We obsess over measurable impact—like boosting engagement by 40% or cutting costs by 25%—so you see ROI from day one, not just polished prototypes."
          />
          <HoverCard
            title="Integrated Design-to-Deployment Workflow"
            description="A seamless pipeline from idea to execution, with no silos."
          />
        </div>
      </div>
    </section>
  );
};

export default HumbleAdvantage;
