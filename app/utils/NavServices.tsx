"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";

export const NavServicesData = [
  {
    name: "Ambulance",
    url: "/ambulance",
    imgSrc: "/assests/Ambulance.png",
    alt: "Ambulance",
  },
  {
    name: "Pharmacy",
    url: "/pharmacy",
    imgSrc: "/assests/Pharmacy.png",
    alt: "Pharmacy",
  },
  {
    name: "Diagnosis",
    url: "/diagnosis",
    imgSrc: "/assests/Diagnostic.png",
    alt: "Diagnosis",
  },
  {
    name: "Radiology",
    url: "/radiology",
    imgSrc: "/assests/Radiology.png",
    alt: "Radiology",
  },
  {
    name: "HomeService",
    url: "/homeservice",
    imgSrc: "/assests/HomeService.png",
    alt: "HomeService",
  },
  {
    name: "Gym",
    url: "/gym",
    imgSrc: "/assests/Gym.png",
    alt: "Gym",
  },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavServices: React.FC<Props> = ({ activeItem, isMobile }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex gap-8 justify-center items-center w-full py-4">
        {NavServicesData.map((item, index) => (
          <Link href={item.url} key={index} passHref>
            <div className="flex flex-col items-center group cursor-pointer hover:scale-105 transition">
              <Image
                src={item.imgSrc}
                // alt={item.alt}
                width={55}
                height={55}
                className="mb-1 rounded-full group-hover:scale-125 transition-transform duration-200 border"
              />
              <span
                className={`text-sm font-medium ${
                  activeItem === index
                    ? "text-blue-600 dark:text-[#37a39a]"
                    : "text-black dark:text-white"
                }`}
              >
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden px-4 py-2">
        <button
          className="flex items-center gap-2 text-lg font-semibold"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <FiMenu size={24} />
          <span className="text-black dark:text-white">Services</span>
        </button>

        {showMobileMenu && (
          <div className="mt-4 flex flex-col gap-4 border-t pt-4">
            {NavServicesData.map((item, index) => (
              <Link href={item.url} key={index} passHref>
                <div className="flex items-center gap-3 hover:pl-2 transition-all">
                  <Image
                    src={item.imgSrc}
                    alt={item.alt}
                    width={32}
                    height={32}
                    className="rounded-full border"
                  />
                  <span
                    className={`text-[16px] font-medium ${
                      activeItem === index
                        ? "text-blue-600 dark:text-[#37a39a]"
                        : "text-black dark:text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* Search bar icons*/}
      <div className="hidden md:flex items-center justify-center mt-4">
        <input
          type="text"
          placeholder="Search..."
          className="border text-gray-500 border-[rgba(94,78,145,0.44)] rounded-lg px-4 py-2 w-1/2"
        />
        <button className="ml-2 bg-blue-600 text-white rounded-lg px-4 py-2">
          Search
        </button>
      </div>
    </>
  );
};

export default NavServices;
