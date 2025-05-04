// import Link from 'next/link';
// import React from 'react'

// export const NavItemsData=[
//     {
//         name:"Home",
//         url:"/",
//     },
//     {
//         name:"Courses",
//         url:"/courses",
//     },
//     {
//         name:"About",
//         url:"/about",
//     },
//     {
//         name:"Policy",
//         url:"/policy",
//     },
//     {
//         name:"FAQ",
//         url:"/faq",
//     },
   
// ];

// type Props = {
//     activeItem:number;
//     isMobile:boolean;
// }

// const NavItems:React.FC<Props> = ({activeItem,isMobile}) => {
//   return (
//     <>
//     <div className='hidden 800px:flex'>
//         {
//             NavItemsData && NavItemsData.map((i,index)=>(
//                 <Link href={`${i.url}`} key={index} passHref>
//                     <span
//                     className={`${
//                         activeItem===index?"dark:text-[#37a39a] text-[crimson]":"dark:text-white text-black"
//                     } text-[18px] px-6 font-Poppins font-[400]`}>
//                         {i.name}
//                     </span>
//                 </Link>


//             ))

            

            
//         }

//     </div>
//     {
//         isMobile && (
//             <div className='flex flex-row mt-5 800px:hidden'>
                
//                  {  NavItemsData && NavItemsData.map((i,index)=>(
                   
//                     <Link href="/" key={index} passHref>
//                         <span className={`${
//                         activeItem===index?"dark:text-[#37a39a] text-[crimson]":"dark:text-white text-black"
//                     } text-[18px] px-6 font-Poppins font-[400]`}
//                         >
//                            {i.name} 
//                         </span>
//                     </Link>
//                    ))
//                 }
//                 </div>
           
//         )
//     }
//     </>
//   )
// }

// export default NavItems























// 2nd generated code 


// import Link from 'next/link';
// import React from 'react';

// export const NavItemsData = [
//     {
//         name: "Home",
//         url: "/",
//     },
//     {
//         name: "Courses",
//         url: "/courses",
//     },
//     {
//         name: "About",
//         url: "/about",
//     },
//     {
//         name: "Policy",
//         url: "/policy",
//     },
//     {
//         name: "FAQ",
//         url: "/faq",
//     },
// ];

// type Props = {
//     activeItem: number;
//     isMobile: boolean;
// }

// const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
//   return (
//     <>
//       <div className='hidden 800px:flex'>
//         {NavItemsData && NavItemsData.map((i, index) => (
//           <Link href={`${i.url}`} key={index} passHref>
//             <span
//               className={`${
//                 activeItem === index ? "dark:text-[#37a39a] text-[crimson]" : "dark:text-white text-black"
//               } text-[18px] px-6 font-Poppins font-[400]`}>
//               {i.name}
//             </span>
//           </Link>
//         ))}
//       </div>
//       {isMobile && (
//         <div className='flex flex-col mt-5 800px:hidden'>
//           {NavItemsData && NavItemsData.map((i, index) => (
//             <Link href={`${i.url}`} key={index} passHref>
//               <span
//                 className={`${
//                   activeItem === index ? "dark:text-[#37a39a] text-[crimson]" : "dark:text-white text-black"
//                 } text-[18px] px-2 font-Poppins font-[400]`}>
//                 {i.name}
//               </span>
//             </Link>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }

// export default NavItems;


















// third 3rd code 



import Link from 'next/link';
import React from 'react';

export const NavItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
}

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className='hidden 800px:flex'>
        {NavItemsData && NavItemsData.map((i, index) => (
          <Link href={`${i.url}`} key={index} passHref>
            <span
              className={`${
                activeItem === index ? "dark:text-[#37a39a] text-[crimson]" : "dark:text-white text-black"
              } text-[18px] px-6 font-Poppins font-[400]`}>
              {i.name}
            </span>
          </Link>
        ))}
      </div>
      {isMobile && (
        <div className='flex flex-col mt-5 ml-5 my-2 gap-4 800px:hidden'>

            <div className='w-full text-center py-6'>
                <Link href={"/"} passHref>
                <span className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}>
                    ELearning 

                </span>
                </Link>

            </div>
          {NavItemsData && NavItemsData.map((i, index) => (
            <Link href={`${i.url}`} key={index} passHref>
              <span
                className={`${
                  activeItem === index ? "dark:text-[#37a39a] text-[crimson]" : "dark:text-white text-black"
                } text-[18px] py-2 font-Poppins font-[400]`}>
                {i.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default NavItems;
