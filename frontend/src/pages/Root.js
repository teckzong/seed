import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import "./Root.module.css";

const root = () => {
  return (
    <>
      <MainNavigation />
      <body>
        <Outlet />
      </body>
    </>
  );
};

export default root;
