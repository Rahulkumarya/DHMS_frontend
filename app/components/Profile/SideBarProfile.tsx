import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";
import avatarDefault from "../../../public/assests/avatar.jpeg";


type Props = {
  user: any;
  active: number;
  avatar: string | null;
  SetActive: (active: number) => void;
  logOutHandler: () => void;
};

const SideBarProfile: FC<Props> = ({
  user,
  active,
  avatar,
  SetActive,
  logOutHandler,
}) => {
  const [localAvatar, setLocalAvatar] = useState<string>(avatarDefault.src);

  // Update local avatar state whenever the user.avatar or avatar prop changes
  useEffect(() => {
    if (user.avatar) {
      setLocalAvatar(user.avatar.url || user.avatar);
    } else if (avatar) {
      setLocalAvatar(avatar);
    } else {
      setLocalAvatar(avatarDefault.src);
    }
  }, [user.avatar, avatar]);

  return (
    <div className="w-full">
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={() => SetActive(1)}
      >
        <Image
          src={user.avatar||avatar?user.avatar.url:avatarDefault}
          alt="User avatar"
          width={30}
          height={30}
          className="w-[30px] h-[30px] 800px:w-[40px] 800px:h-[40px] cursor-pointer rounded-full"
        />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
          My Account
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 2 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={() => SetActive(2)}
      >
        <RiLockPasswordLine size={20} fill="#fff" />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
          Change Password
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 3 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={() => SetActive(3)}
      >
        <SiCoursera size={20} fill="#fff" />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
          Enrolled Courses
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 4 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={logOutHandler}
      >
        <AiOutlineLogout size={20} fill="#fff" className="dark:color-white color-black"/>
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
          Log out
        </h5>
      </div>
    </div>
  );
};

export default SideBarProfile;
