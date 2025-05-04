import { useSocialAuthMutation } from '@/redux/features/auth/authApi';
import { useSession } from 'next-auth/react';
import React, { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import SideBarProfile from "./SideBarProfile"
import ProfileInfo from './ProfileInfo';

type Props = {
    user:any;
    avatar:string|null;
};

const Profile: FC<Props> = ({user}) => {
  const [isActive, setActive] = useState(false);
 const[avatar,setAvatar]=useState(null);
 const[active,SetActive]=useState(1);

 const logOutHandler=async()=>{
    console.log("ffff");
 }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='w-[85%] flex mx-auto'>
      <div
        className={`w-[60px] 800px:w-[310px] h-[450px] bg-slate-900 bg-opacity-90 border border-[#ffffff1d] rounded-[5px] shadow-sm mt-[80px] mb-[80px] sticky ${isActive ? "top-[120px]" : "top-[30px]"} left-[30px]`}
      >
        {/* Sidebar content goes here */}

        <SideBarProfile 
        user={user}
        active={active}
        avatar={avatar}
        SetActive={SetActive}
        logOutHandler={logOutHandler}
        />
      </div>
    </div>
  );
};

export default Profile;
