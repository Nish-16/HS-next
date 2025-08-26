"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "How long does a typical project take?",
    answer:
      "We typically deliver website development projects in 6–8 weeks and mobile apps in 8–12 weeks, depending on scope and complexity.",
  },
  {
    question: "What pricing models do you offer?",
    answer:
      "We offer fixed-price, time-and-material, and dedicated team models depending on your project needs.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We follow agile methodologies, perform rigorous QA testing, and maintain constant communication with clients.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in healthcare, finance, e-commerce, and education — but we're adaptable to any domain.",
  },
];

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heightRefs = useRef<number[]>([]);
  const faqItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    faqData.forEach((_, i) => {
      const el = contentRefs.current[i];
      if (el) heightRefs.current[i] = el.scrollHeight;
    });
  }, [activeIndex]);

  useEffect(() => {
    if (faqItemRefs.current.length) {
      faqItemRefs.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: i * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      });
    }
  }, []);

  const toggleIndex = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="blogs" className="bg-black text-white py-20 px-4 sm:px-8 md:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Stay Curious,{" "}
          <span className="font-avenir-demibold text-blue-400">Questions?</span>
        </h2>
        <p className="font-avenir-demibold text-gray-400 mb-12">
          Everything you need to know about Humble Solutions
        </p>

        <div className="space-y-5 text-left">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            const contentHeight = heightRefs.current[index] || 0;

            return (
              <div
                key={index}
                ref={(el) => {
                  faqItemRefs.current[index] = el;
                }}
                className="bg-[#FBFBFB]/20 rounded-2xl p-5 transition-colors duration-300 opacity-0"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="flex items-center justify-between w-full text-left font-medium text-white"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span>{item.question}</span>
                  {isOpen ? (
                    <ChevronUp size={20} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </button>

                <div
                  id={`faq-content-${index}`}
                  ref={(el) => {
                    if (el) contentRefs.current[index] = el;
                  }}
                  style={{
                    maxHeight: isOpen ? `${contentHeight + 20}px` : "0px",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.5s ease, opacity 0.3s ease",
                    overflow: "hidden",
                  }}
                >
                  <div className="font-avenir-regular text-sm text-gray-400 px-1 pt-2 pb-2 mt-1">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="mt-12 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-sm font-medium flex items-center gap-2 mx-auto transition">
          Ask a question
          <span className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
            →
          </span>
        </button>
      </div>
    </section>
  );
};

export default Accordion;
