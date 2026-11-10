import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router";

export const About = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>This is Aboutpage</h1>
      <button onClick={() => navigate("/about/nested")}>Reveal Nested</button>
      <Outlet />
    </div>
  );
};
