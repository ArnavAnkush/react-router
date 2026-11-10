import React from "react";
import { NavLink } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen bg-black text-white p-8 flex flex-col gap-5">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
