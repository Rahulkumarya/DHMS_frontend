
"use client";
import Link from "next/link";
import React, { FC, useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";

import NavItems from "../utils/NavItems";


import CustomModel from "../utils/CustomModel";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Verification from "../components/Auth/Verification";
import { useSelector } from "react-redux";
import Image from "next/image";
import FaqDetail from "./Faq/FaqDetail";

import { useSession } from "next-auth/react";
import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import avatar from "../../public/assests/avatar.png";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
};

const Header: FC<Props> = ({ open, setOpen, activeItem, route, setRoute }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user } = useSelector((state: any) => state.auth);
  const { data } = useSession();
  const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();

  useEffect(() => {
    if (!user) {
      if (data) {
        socialAuth({
          emal: data?.user?.email,
          name: data?.user?.name,
          avatar: data.user?.image,
        });
      }
    }
    if (isSuccess) {
      toast.success("Login Successfully");
    }
  }, [data, isSuccess, socialAuth, user]);

  // console.log(data);

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

  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      setOpenSidebar(false);
    }
  };

  console.log(user, "hii");

  return (
    <div className="w-full relative ">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50  dark:bg-gradient-to-b dark:from-gray-100 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
            : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow "
        }`}
      >
        <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
          <div className="w-full h-[80px] flex items-center justify-between p-3 ">
            <div>
              <Link
                href="/"
                className="text-[25px] font-Poppins font-[500] text-black dark:text-white"
              >
                Uronhealth
              </Link>

              <></>
            </div>
            <div className="flex items-center">
              <NavItems activeItem={activeItem} isMobile={false} />

              {/* //   only for mobile for responsiveness*/}
              <div className="800px:hidden">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer dark:text-white text-black"
                  onClick={() => setOpenSidebar(true)}
                />
              </div>
              {user ? (
                <Link href={"/profile"}>
                  <Image
                    src={user.avatar ? user.avatar : avatar}
                    alt="image"
                    className="w-[30px] h-[30px] rounded-full cursor-pointer"
                  />
                </Link>
              ) : (
                <div className="flex items-center flex-col cursor-pointer ml-6">
                  <HiOutlineUserCircle
                    size={35}
                    className="hidden 800px:block cursor-pointer dark:text-white text-black "
                    onClick={() => setOpen(true)}
                  />
                  <span className="text-[14px] font-Poppins text-black">
                    User
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* mobile sidebar  */}
      {openSidebar && (
        <div
          className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
          onClick={handleClose}
          id="screen"
        >
          <div className="w-[70%] fixed z-[999999999]  h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
            <NavItems activeItem={activeItem} isMobile={true} />
            <HiOutlineUserCircle
              size={25}
              className="cursor-pointer  ml-5 my-2 text-black dark:text-white"
              onClick={() => setOpen(true)}
            />
            <br />
            <br />
            <p
              className="text-[16
            px-2 pl-5 text-black dark:text-white"
            >
              Copyright &copy; 2025 Uronheath
            </p>
          </div>
        </div>
      )}

      {route === "Login" && (
        <>
          {open && (
            <CustomModel
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Login}
            />
          )}
        </>
      )}

      {route === "FaqDetail" && (
        <>
          {open && (
            <CustomModel
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={FaqDetail}
            />
          )}
        </>
      )}

      {route === "Sign-up" && (
        <>
          {open && (
            <CustomModel
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={SignUp}
            />
          )}
        </>
      )}

      {route === "Verification" && (
        <>
          {open && (
            <CustomModel
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Verification}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Header;
