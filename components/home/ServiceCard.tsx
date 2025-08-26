// src/components/ServiceCard.tsx
"use client";

import type { Service } from "@/components/home/data/services";

type Props = {
  service: Service;
  isOpen: boolean;
  onClick: () => void;
};

const ServiceCard = ({ service, isOpen, onClick }: Props) => {
  return (
    <div
      className="bg-[#181e2a] rounded-2xl p-2 shadow-md border border-gray-700 cursor-pointer transition"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="bg-blue-500 rounded-xl p-2 flex items-center justify-center">
          {service.icon}
        </div>
        <h3 className="text-white font-semibold text-lg flex-1">{service.title}</h3>
        <span className="text-gray-400">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Expandable section */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 py-4 mt-4" : "max-h-0 opacity-0 py-0 mt-0"
        }`}
      >
        <div>
          <p className="text-gray-400 text-sm mb-2">{service.description}</p>
          {service.button && (
            <button className="text-xs text-white bg-blue-600 rounded-full px-4 py-1 mt-1 hover:bg-blue-700 transition">
              Explore More →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
