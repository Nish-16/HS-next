import type { JSX } from 'react';

export type Service = {
  title: string;
  icon: JSX.Element;
  description: string;
  button: boolean;
};

export const services: Service[] = [
  {
    title: "App Development",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 20h9"/><rect width="18" height="13" x="3" y="4" rx="2"/><path d="M8 21h8"/>
      </svg>
    ),
    description: "Deliver cutting-edge mobile experiences across iOS and Android...",
    button: true,
  },
  {
    title: "Website Development",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16v16H4z"/><path d="M4 9h16"/>
      </svg>
    ),
    description: "Launch responsive websites that establish your digital presence...",
    button: false,
  },
  {
    title: "UI/UX Design",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    description: "Craft intuitive, research-backed interfaces that delight users...",
    button: false,
  },
  {
    title: "Software-Hardware Solutions",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="18" height="13" x="3" y="4" rx="2"/><path d="M8 21h8"/>
      </svg>
    ),
    description: "Integrate software with hardware for real-world impact.",
    button: false,
  },
];
