"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  name: string;
  role: string;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Tushar Garg",
    role: "Customer",
    text: "Contrary to popular belief, Lorem ipsum dolor sit amet. Lorem quis bibendum auctor, nisi elit consequat ipsum.",
    image: "/photos/tushar.jpg",
  },
  {
    name: "Yash Agarwal",
    role: "Customer",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/photos/yash.jpg",
  },
  {
    name: "Sanya Mehra",
    role: "Customer",
    text: "I was very impressed with the speed and professionalism. Would highly recommend!",
    image: "/photos/sanya.jpg",
  },
  {
    name: "Arjun Verma",
    role: "Customer",
    text: "This service really helped streamline our work. Excellent support team and great results!",
    image: "/photos/arjun.jpg",
  },
  {
    name: "Priya Singh",
    role: "Customer",
    text: "Effortless experience and outstanding delivery. Thank you!",
    image: "/photos/priya.jpg",
  },
];

const cardColors = [
  "bg-gray-900",
  "bg-yellow-950",
  "bg-lime-950",
  "bg-blue-950",
  "bg-indigo-950",
];

const Testimonials = () => {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
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
    <section className="bg-[#0D0D0D] text-white py-16 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left Column */}
        <div ref={leftRef} className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            What{" "}
            <span className="font-avenir-demibold text-blue-400">
              Our Clients
            </span>{" "}
            Say About <br />
            <span className="font-avenir-demibold text-white">Services</span>
          </h2>
          <p className="font-avenir-regular text-gray-400">
            Lorem ipsum dolor sit amet. Lorem quis bibendum auctor, nisi elit
            consequat ipsum, nec sagittis sem nibh id euis sed odio sit amet
            nibh vulputate cursus.
          </p>
          <button className="bg-[#1C1C1C] hover:bg-[#2e2e2e] text-white py-3 px-6 rounded-full flex items-center gap-2 text-sm font-medium transition">
            See All Testimonies
            <span className=" bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
              →
            </span>
          </button>
        </div>

        {/* Right Column: Scrollable Cards */}
        <div className="lg:w-1/2 w-full overflow-x-auto scrollbar-hide">
          <div
            ref={cardsRef}
            className="flex gap-6 snap-x snap-mandatory px-1 py-2 overflow-visible"
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`snap-center shrink-0 w-[280px] md:w-[300px] flex flex-col justify-between p-6 rounded-xl min-h-[250px] outline-1 outline-blue-400 outline-offset-2 transition-all duration-300 ease-in-out relative ${
                  cardColors[index % cardColors.length]
                }`}
              >
                <p className="font-avenir-regular text-base text-gray-300 mt-4">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
