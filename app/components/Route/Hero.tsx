import Image from "next/image";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen">
      {/* Left column with larger image */}
      <div className="lg:w-1/2">
        <div className="flex justify-center lg:justify-start px-6 ">
          <div className="rounded-full  overflow-hidden lg:ml-12 border-2 border-x-yellow-200">
            {/* lg:ml-12 move to left to right  */}
            <Image
              src={require("../../../public/assests/st.jpg")}
              alt="Online Learning"
              className="object-cover w-64 h-64 lg:w-[500px] lg:h-[500px]"
              priority
            />
          </div>
        </div>
      </div>
      {/* Right column with smaller icons and text */}
      <div className="lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start justify-center px-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mt-5 lg:mt-0">
            Imporve Your Online Learning Experience Better Instantly
          </h2>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300">
            We have 40k+ Online courses & 500K+ Online registered student. Find
            your desired Courses from them.
          </p>
          <div className="mt-8 w-full  md:w-3/4 lg:w-4/5">
            {/* Search input */}
            <div className="flex items-center bg-white dark:bg-gray-700 rounded-lg shadow">
              <input
                type="search"
                placeholder="Search Courses..."
                className="flex-grow p-4 rounded-l-lg focus:outline-none"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-r-lg">
                {/* Search icon */}
                <BiSearch size={20} />
              </button>
            </div>
          </div>
          {/* Students section */}

          {/* Display student images */}
          <div className="mt-8 flex items-center space-x-[-15px]">
            <div className="flex-shrink-0">
              <Image
                src={require("../../../public/assests/2nd.jpg")}
                alt="Student"
                className="rounded-full border-2 border-white"
                width={50}
                height={50}
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src={require("../../../public/assests/3rd.jpg")}
                alt="Student"
                className="rounded-full border-2 border-white"
                width={50}
                height={50}
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src={require("../../../public/assests/4th.jpg")}
                alt="Student"
                className="rounded-full border-2 border-white"
                width={50}
                height={50}
              />
            </div>

            {/* Text */}
            <div>
              <p className="self-center text-lg text-gray-600 dark:text-gray-300 space-x-[15px] ml-[20px]">
                500K+ People already trusted us.{" "}
                <Link href="/courses">
                  <span className="text-blue-500 hover:text-blue-700">
                    View Courses
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
