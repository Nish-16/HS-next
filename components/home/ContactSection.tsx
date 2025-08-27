"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Import the asset instead of using string URL
import paperPlaneGirl from "@/public/photos/paper-plane-girl.png";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 60%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 60%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  const inputClass =
    "w-full max-w-full bg-transparent border border-white placeholder-white outline-none py-2 px-3 rounded";

  return (
    <section className="min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#2057C5] to-[#9CBDFF] text-white px-6 py-4 overflow-x-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div ref={leftRef} className="text-center lg:text-left">
          <h3 className="text-xl font-medium mb-2">Got a Project in Mind?</h3>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Let’s Make It Happen Together!
          </h1>
          <Image
            src={paperPlaneGirl} // ✅ imported instead of URL string
            alt="Girl on paper plane"
            className="w-72 mx-auto lg:mx-0 mt-4"
          />
        </div>

        {/* Right Side */}
        <form ref={rightRef} className="space-y-6 w-full max-w-lg mx-auto">
          <div>
            <label className="block mb-1 font-lg">Full Name</label>
            <input type="text" className={inputClass} placeholder="John Doe" />
          </div>
          <div>
            <label className="block mb-1 font-lg">Email address</label>
            <input
              type="email"
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-lg">Phone Number</label>
            <input
              type="tel"
              className={inputClass}
              placeholder="+123456789"
            />
          </div>
          <div>
            <label className="block mb-1 font-lg">Your Message:</label>
            <textarea
              className={`${inputClass} h-24 resize-none`}
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-blue-600 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition duration-300"
          >
            Submit
            <span className="text-lg justify-center">→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
