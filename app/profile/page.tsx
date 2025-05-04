// app/profile/page.tsx
"use client";
import React, { useState } from "react";
import Protected from "../hooks/useProtected";
import Header from "../components/Header";
import Heading from "../utils/Heading";
import Profile from "../components/Profile/Profile";
import { useSelector } from "react-redux";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  const { user } = useSelector((state: any) => state.auth);

  return (
    <Protected>
      <Heading
        title={`${user?.name}`}
        description="Elearning is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, Redux, Machine Learning"
      />

      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Profile user={user} avatar={user?.avatar || null} />
    </Protected>
  );
};

export default Page;
