"use client"
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdSos } from "react-icons/md";


// Array of nav items with image icon + label
export const NavItemsData = [
  {
    name: "Home",
    url: "/",
    imgSrc: "/assests/Home.png", // Store in /public/assets/home.png
    alt: "Home",
  },
  {
    name: "FAQ",
    url: "/faq",
    imgSrc: "/assests/Faq.png", // Store in /public/assets/home.png
    alt: "FAQ",
  },
  {
    name: "Insurance",
    url: "/Insurance",
    imgSrc: "/assests/Insurance.png", // Store in /public/assets/home.png
    alt: "Insurance",
  },
  {
    name: "Appointment",
    url: "/appointment",
    imgSrc: "/assests/appointment.png", // Store in /public/assets/home.png
    alt: "Appointment",
  },
  {
    name: "Validity",
    url: "/validity",
    imgSrc: "/assests/Validity.png", // Store in /public/assets/home.png
    alt: "validity",
  },
  {
    name: "SoS",
    url: "/sos",
    imgSrc: "/assests/Soss.png", // Store in /public/assets/home.png
    alt: "SoS",
  },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      {/* Desktop Navbar - Horizontal row, icon above text */}
      <div className="hidden 800px:flex gap-10">
        {NavItemsData.map((item, index) => (
          <Link href={item.url} key={index} passHref>
            <div className="flex flex-col items-center justify-center cursor-pointer group">
              {/* Top Image */}
              <Image
                src={item.imgSrc}
                // alt={item.alt }
                width={25}
                height={25}
                className="mb-1 group-hover:scale-150 transition-transform duration-200 border rounded-full"
              />
{/* testing im store image is display but item.imgSrc in not display why fix it  */}
{/* <Image src={im} alt="Home" className="w-8"/> */}


              
              {/* Bottom Label */}
              <span
                className={`text-[14px] font-Poppins ${
                  activeItem === index
                    ? "text-[#303bdd] dark:text-[#37a39a]"
                    : "text-black dark:text-white"
                }`}
              >
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile view */}
      {isMobile && (
        <div className="flex flex-col mt-5 ml-5 my-2 gap-4 800px:hidden">
          <div className="w-full text-center py-6">
            <Link href={"/"} passHref>
              <span className="text-[25px] font-Poppins font-[500] text-black dark:text-white">
                Uronhealth
              </span>
            </Link>
          </div>
          {NavItemsData.map((item, index) => (
            <Link href={item.url} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? "text-[crimson] dark:text-[#37a39a]"
                    : "text-black dark:text-white"
                } text-[18px] py-2 font-Poppins font-[400]`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavItems;
