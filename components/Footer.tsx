"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-start justify-items-center md:justify-items-start">
        
        {/* 1. Logo + Social Icons */}
        <div className="flex flex-col gap-10 justify-center items-center md:items-start md:justify-start w-full">
          <div className="space-y-2 w-full flex flex-col items-center md:items-start">
            <Image
              src="/photos/logo.png"
              alt="Humble Solutions"
              width={180}
              height={60}
              className="mx-auto md:mx-0"
            />
          </div>
          <div className="flex gap-4 mt-2 justify-center md:justify-end mr-0 md:mr-10 w-full">
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 2. Contact Info */}
        <div className="flex flex-col text-sm leading-6 space-y-7 items-center md:items-start text-center md:text-left w-full">
          <div>
            <strong className="block text-white text-lg">Email</strong>
            <span className="text-gray-300 text-xs">
              executives@humblecoders.in
            </span>
          </div>
          <div>
            <strong className="block text-white text-lg">Phone</strong>
            <span className="text-gray-300 text-xs">+91 7698XXXXX</span>
          </div>
          <div>
            <strong className="block text-white text-lg">Address</strong>
            <span className="text-gray-300 text-xs">Sample, India</span>
          </div>
        </div>

        {/* 3. Company Links */}
        <div className="flex flex-col gap-2 text-sm space-y-3 items-center md:items-start text-center md:text-left w-full">
          <h4 className="text-white font-semibold mb-2 text-xl">Company</h4>
          <Link href="/about" className="text-gray-300 hover:text-blue-400">
            About us
          </Link>
          <Link href="/customers" className="text-gray-300 hover:text-blue-400">
            Customers
          </Link>
          <Link href="/team" className="text-gray-300 hover:text-blue-400">
            Team
          </Link>
          <Link href="/careers" className="text-gray-300 hover:text-blue-400">
            Careers
          </Link>
        </div>

        {/* 4. Support Links */}
        <div className="flex flex-col gap-2 text-sm space-y-3 items-center md:items-start text-center md:text-left w-full">
          <h4 className="text-white font-semibold mb-2 text-xl">Support</h4>
          <Link href="/help" className="text-gray-300 hover:text-blue-400">
            Help center
          </Link>
          <Link href="/terms" className="text-gray-300 hover:text-blue-400">
            Terms of service
          </Link>
          <Link href="/legal" className="text-gray-300 hover:text-blue-400">
            Legal
          </Link>
          <Link href="/privacy" className="text-gray-300 hover:text-blue-400">
            Privacy policy
          </Link>
        </div>

        {/* 5. Right-side Illustration */}
        <div className="flex justify-center md:justify-end items-start w-full">
          <Image
            src="/photos/footer.png"
            alt="Footer Illustration"
            width={300}
            height={200}
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Bottom Border */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Humble Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
