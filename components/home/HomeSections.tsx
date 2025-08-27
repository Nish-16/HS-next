"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "./data/services";

// HERO SECTION
export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  return (
    <section
      id="home"
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-16 min-h-screen gap-10"
    >
      {/* Left: Text */}
      <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-6 lg:p-5">
        <h1 className=" font-avenir-demibold text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 leading-tight">
          Transform Ideas into Intuitive <br />
          <span className="text-blue-400">Digital Experiences.</span>
        </h1>
        <p className=" font-avenir-regular text-gray-400 text-base sm:text-lg max-w-xl">
          We craft sleek mobile apps, responsive websites, and user-centered
          UI/UX designs...
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
          <button className="font-avenir-regular bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow transition text-base">
            Get In Touch
          </button>
          <button className="font-avenir-regular bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-full shadow transition text-base flex items-center gap-2 justify-center">
            Explore Our Portfolio <span>→</span>
          </button>
        </div>
      </div>
      {/* Right: Phone Images */}
      <div className="flex-1 flex items-center justify-center lg:justify-end w-full mt-8 lg:mt-0">
        <div className="relative w-[200px] h-[280px] sm:w-[240px] sm:h-[320px] md:w-[300px] md:h-[400px] lg:w-[360px] lg:h-[480px] xl:w-[400px] xl:h-[520px]">
          {/* Static Phone */}
          <img
            src="/photos/phone-1-test.png"
            alt="Phone 1"
            className="absolute z-20 rounded-3xl shadow-2xl rotate-[-8deg] w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] left-[100px] top-[20px]"
          />
          {/* Second Phone (hidden on md+) */}
          <img
            src="/photos/phone-2.png"
            alt="Phone 2"
            className="absolute z-10 rounded-3xl shadow-2xl rotate-[-8deg] w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] left-0 top-0 md:hidden"
          />
        </div>
      </div>
    </section>
  );
};

// SERVICES SECTION
export const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section
      id="services"
      className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center px-4 py-16 gap-10"
    >
      {/* Left Image */}
      <div className="flex-1 flex justify-center items-center mb-10 lg:mb-0 relative">
        <img
          src="/photos/hand.png"
          alt="Hand"
          className="max-w-[350px] sm:max-w-[350px] md:max-w-md lg:max-w-md w-full h-auto z-9"
        />
        {/* Foreground Phone Image (hidden on md+) */}
        <img
          src="/photos/phone-2.png"
          alt="Phone"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[150px] sm:max-w-[180px] md:max-w-[px] lg:max-w-[240px] w-full h-auto z-[30] md:hidden"
        />
      </div>
      {/* Right Accordion */}
      <div className="flex-1 flex flex-col items-center lg:items-start">
        <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-2 text-center lg:text-left">
          Services We Provide
        </h2>
        <p className="text-gray-300 mb-8 text-center lg:text-left max-w-lg">
          We help you grow– with smart technology, honest design, and scalable
          solutions...
        </p>
        <div className="flex flex-col gap-4 w-full max-w-md">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.title}
              service={service}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type PortfolioSectionProps = {
  portfolioScrollRef: React.RefObject<HTMLDivElement | null>;
};

const PortfolioSection = ({ portfolioScrollRef }: PortfolioSectionProps) => {
  const projects = [
    {
      title: "Fintrack",
      subtitle: "Finance Tracking Mobile App",
      description:
        "FinTrack is a smart finance tracking app designed to help you manage expenses, set savings goals, monitor subscriptions, and gain insights into your spending habits. With sleek visuals, personalized suggestions, and weekly progress tracking, FinTrack makes saving simple and efficient – all in one place. Available on iOS and Android.",
      image: "/photos/phone-2.png",
    },
    {
      title: "Cyclone Manager",
      subtitle: "Task Automation App",
      description:
        "Cyclone helps teams automate repetitive tasks and manage workflows with intuitive UI and real-time sync. Build custom flows, integrate APIs, and supercharge your productivity.",
      image: "/photos/cyclone.png",
    },
    {
      title: "Xplore360",
      subtitle: "Travel Discovery Platform",
      description:
        "Explore new destinations, connect with local guides, and plan personalized trips all in one app. Xplore360 is your AI-powered travel assistant.",
      image: "/photos/xplore360.png",
    },
  ];

  return (
    <section
      id="portfolio"
      className="px-0 py-10 bg-[#0f172a] text-white w-full min-h-screen flex flex-col"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 px-6 gap-6 w-full">
        <h2 className="font-avenir-demibold text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Here Is A Glimpse Of{" "}
          <span className="font-avenir-demibold text-blue-400">
            Our Work....
          </span>
        </h2>
        <button className="font-avenir-demibold bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-base md:text-lg shadow flex items-center gap-2">
          View Our Portfolio →
        </button>
      </div>

      {/* Scrollable Cards */}
      <div
        className="flex-1 w-full overflow-x-auto overflow-y-hidden custom-scrollbar"
        ref={portfolioScrollRef}
      >
        <div className="flex gap-6 sm:gap-8 px-6 py-6 min-w-max items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-[#1e293b] rounded-3xl p-4 sm:p-8 md:p-12 w-[90vw] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[900px] shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-10 h-[70vh] max-h-[500px]"
            >
              {/* Text Section */}
              <div className="md:w-2/3 w-full">
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
                  style={{
                    fontFamily: "IBM Plex Mono, monospace",
                    fontWeight: 600,
                  }}
                >
                  {project.title}
                </h3>
                <h4 className="font-avenir-regular text-gray-400 text-lg sm:text-xl mb-4">
                  {project.subtitle}
                </h4>
                <p className="font-avenir-regular text-gray-300 text-base sm:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/3 w-full max-w-[300px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl object-cover w-full h-auto max-h-[500px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// COMBINED EXPORT
type HomeSectionsProps = {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
};

const HomeSections = ({ scrollContainerRef }: HomeSectionsProps) => {
  const containerRef = scrollContainerRef;
  const { scrollYProgress } = useScroll({ container: containerRef });

  // State for client-side calculations
  const [windowDimensions, setWindowDimensions] = useState({
    width: 1920, // Default fallback values
    height: 1080,
  });
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side window calculations
  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsLargeScreen(window.innerWidth >= 768);
    };

    // Set initial values
    updateDimensions();
    setIsMounted(true);

    // Add resize listener
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Convert pixel positions to percentage based on window size
  const startXPercent = (950 / windowDimensions.width) * 100;
  const startYPercent = (90 / windowDimensions.height) * 100;
  const midXPercent = (260 / windowDimensions.width) * 100;
  const midYPercent = (850 / windowDimensions.height) * 100;

  const endXPercent = 40;
  const endYPercent = 230;

  // Animate position and scale - only first part (hero to services)
  const xRaw = useTransform(
    scrollYProgress,
    [0, 0.5],
    [startXPercent, midXPercent]
  );
  const yRaw = useTransform(
    scrollYProgress,
    [0, 0.5],
    [startYPercent, midYPercent]
  );

  const portfolioScrollRef = useRef<HTMLDivElement>(null);
  const [portfolioScroll, setPortfolioScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (portfolioScrollRef.current) {
        setPortfolioScroll(portfolioScrollRef.current.scrollLeft);
      }
    };
    const el = portfolioScrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const x = useTransform(xRaw, (v) => `${v}%`);
  const y = useTransform(yRaw, (v) => `${v}%`);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [-8, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.67], [1, 1, 0]);

  return (
    <div
      ref={containerRef}
      className={
        isLargeScreen
          ? "h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth relative hide-scrollbar"
          : "min-h-screen w-full overflow-y-auto relative hide-scrollbar"
      }
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {/* Animated phone-2 image for md+ screens - only first part of animation */}
      {isMounted && isLargeScreen && (
        <motion.img
          src="/photos/phone-2.png"
          alt="Phone 2"
          className="hidden md:block absolute z-30 rounded-3xl shadow-2xl"
          style={{
            left: x,
            top: y,
            width: "200px",
            borderRadius: "1.5rem",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            scale,
            rotate,
            zIndex: 10,
            opacity,
          }}
        />
      )}
      <div
        className={
          isLargeScreen
            ? "snap-start min-h-screen flex items-stretch"
            : "min-h-screen flex items-stretch"
        }
      >
        <HeroSection />
      </div>
      <div
        className={
          isLargeScreen
            ? "snap-start min-h-screen flex items-stretch"
            : "min-h-screen flex items-stretch"
        }
      >
        <ServicesSection />
      </div>
      <div
        className={
          isLargeScreen
            ? "snap-start min-h-screen flex items-stretch"
            : "min-h-screen flex items-stretch"
        }
      >
        <PortfolioSection portfolioScrollRef={portfolioScrollRef} />
      </div>
    </div>
  );
};

export default HomeSections;
