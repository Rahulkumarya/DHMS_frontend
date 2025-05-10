
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const cardData = [
  {
    title: "Ambulance Service",
    description: "This is card 1 content.",
    image: "/assests/Ambulance.png",
    price: 100,
    offer: 10,
  },
  {
    title: "Pharmacy Service",
    description: "This is card 2 content.",
    image: "/assests/Pharmacy.png",
    price: 100,
    offer: 10,
  },
  {
    title: "Home Care Service",
    description: "This is card 3 content.",
    image: "/assests/Diagnostic.png",
    price: 100,
    offer: 10,
  },
  {
    title: "Gym Service",
    description: "This is card 4 content.",
    image: "/assests/Gym.png",
    price: 100,
    offer: 10,
  },
  {
    title: "Radiology Service",
    description: "This is card 5 content.",
    image: "/assests/Radiology.png",
    price: 100,
    offer: 10,
  },
];

const HospitalServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Set items per slide based on screen width
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // Tablet
      } else {
        setItemsPerSlide(3); // Desktop
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalItems = cardData.length;

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const index = (currentIndex + i) % totalItems;
      visible.push(cardData[index]);
    }
    return visible;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // Optional: Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="w-full max-w-6xl mx-auto p-4">
        <h2 className="flex items-center justify-center text-black bg-white font-Josefin font-[600] text-[25px]">Hospital Services</h2>
      <div className="relative w-full max-w-6xl mx-auto p-4">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 mr-5  top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 text-black"
        >
          <GrFormPrevious size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 text-black"
        >
          <GrFormNext size={24} />
        </button>

        {/* Cards */}
        <div
          className={`grid gap-6 transition-all duration-500 ${
            itemsPerSlide === 1
              ? "grid-cols-1"
              : itemsPerSlide === 2
              ? "grid-cols-2"
              : "grid-cols-3"
          }`}
        >
          {getVisibleCards().map((card, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-lg shadow-sm border max-w-sm w-full"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={160}
                className="rounded-md max-h-40 w-full object-cover"
              />
              <p className="text-gray-900 text-xl font-semibold mt-2">
                {card.title}
              </p>
              <div className="mt-2">
                <div className="flex items-center space-x-2">
                  <p className="text-gray-500 line-through text-sm">
                    ₹{card.price}
                  </p>
                  <p className="text-green-600 font-semibold text-lg">
                    ₹{card.offer}
                  </p>
                </div>
                <p className="text-red-600 text-sm font-medium mt-1">
                  {Math.round(((card.price - card.offer) / card.price) * 100)}%
                  OFF
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-1">{card.description}</p>
              <button className="ml-2 bg-blue-600 text-white rounded-lg px-4 py-2">
                Details
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default HospitalServices;
