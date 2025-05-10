// 'use client'  //use because clients in app folder
// import React,{FC,useState} from "react"
// import Heading from "./utils/Heading";
// import Header from "./components/Header";
// import Hero from "./components/Route/Hero"
// import NavServices from "./utils/NavServices";
// import AutoSliderCards from "./utils/AutoSliderCards";
// import HospitalServices from "./utils/HospitalSerivces";




// interface Props {}

// const Page:FC<Props>=(props)=>{

//   const[open,setOpen]=useState(false);
//   const[activeItem,setActiveItem]=useState(0);
//   const[route,setRoute]=useState("Login");

//   return (
//     <div>
//       <Heading
//         // title in header
//         title="Uronhealth"
//         description="Uronheath is a platform for patient and doctor  to connect with each other. It is a platform where patients can find doctors and book appointments with them. It is a platform where doctors can find patients and book appointments with them."
//         keywords="diagnosis, doctor, health, health care, health insurance, health services, hospital, medical, medicine, patient, patients, physician, physician assistant, primary care physician, primary care provider, provider, specialist"
//       />

//       <Header
//         open={open}
//         setOpen={setOpen}
//         activeItem={activeItem}
//         setRoute={setRoute}
//         route={route}
//       />
//       {/* <Hero /> */}
//       <NavServices
//       />
//       <AutoSliderCards/>
//       <HospitalServices/>
//     </div>
//   );

  
// };


// export default Page;





// "use client";

// import React, { FC, useState, useEffect } from "react";
// import Heading from "./utils/Heading";
// import Header from "./components/Header";
// import NavServices from "./utils/NavServices";
// import AutoSliderCards from "./utils/AutoSliderCards";
// import HospitalServices from "./utils/HospitalSerivces";

// interface Props {}

// const Page: FC<Props> = () => {
//   const [open, setOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState(0);
//   const [route, setRoute] = useState("Login");
//   const [showHospital, setShowHospital] = useState(false);

//   // Track scroll and toggle components
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       // Adjust the threshold as needed (e.g., 400px)
//       if (scrollY > 400) {
//         setShowHospital(true);
//       } else {
//         setShowHospital(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div style={{ height: "2000px" }}>
//         <Heading
//           title="Uronhealth"
//           description="Uronheath is a platform for patients and doctors to connect..."
//           keywords="diagnosis, doctor, health care, hospital, patient, physician, primary care"
//         />

//         <Header
//           open={open}
//           setOpen={setOpen}
//           activeItem={activeItem}
//           setRoute={setRoute}
//           route={route}
//         />
//       </div>
//       <div>
//         {/* Show NavServices and AutoSliderCards before scroll */}
//         {!showHospital && (
//           <>
//             <NavServices />
//             <AutoSliderCards />
//           </>
//         )}

//         {/* Show HospitalServices after scroll */}
//         {showHospital && <HospitalServices />}
//       </div>
//     </>
//   );
// };

// export default Page;


//3rd page 
// "use client";

// import React, { FC, useState, useEffect } from "react";
// import Heading from "./utils/Heading";
// import Header from "./components/Header";
// import NavServices from "./utils/NavServices";
// import AutoSliderCards from "./utils/AutoSliderCards";
// import HospitalServices from "./utils/HospitalSerivces";

// interface Props {}

// const Page: FC<Props> = () => {
//   const [open, setOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState(0);
//   const [route, setRoute] = useState("Login");
//   const [showHospital, setShowHospital] = useState(false);

//   // Scroll handler
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       if (scrollY > 400) {
//         setShowHospital(true);
//         console.log("showHospital", showHospital);
//       } else {
//         setShowHospital(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen">
//       <Heading
//         title="Uronhealth"
//         description="Uronheath is a platform for patients and doctors to connect..."
//         keywords="diagnosis, doctor, health care, hospital, patient, physician, primary care"
//       />

//       <Header
//         open={open}
//         setOpen={setOpen}
//         activeItem={activeItem}
//         setRoute={setRoute}
//         route={route}
//       />

//       {!showHospital && (
//         <>
//           <NavServices />
//           <AutoSliderCards />
//         </>
//       )}

//       {showHospital && <HospitalServices />}

//       {/* Add some content for scrolling */}
//       <div style={{ height: "1200px" }}
      
//        />
//     </div>
//   );
// };

// export default Page;


// 4th page a


"use client";

import React, { FC, useState, useEffect } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import NavServices from "./utils/NavServices";
import AutoSliderCards from "./utils/AutoSliderCards";
import HospitalServices from "./utils/HospitalSerivces";

const Page: FC = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  const [showHospital, setShowHospital] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100) {
        console.log("showHospital", showHospital, window.scrollY);
      }
      setShowHospital(window.scrollY > 100);
      // setNavServices(window.scrollY < 100);
      console.log("after showHospital", setShowHospital, window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Heading
        title="Uronhealth"
        description="Uronheath is a platform for patients and doctors to connect..."
        keywords="health, doctor, hospital"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />

      <NavServices activeItem={0} isMobile={false} />
      <AutoSliderCards />
      {showHospital && <HospitalServices />}

    </>
  );
};

export default Page;
