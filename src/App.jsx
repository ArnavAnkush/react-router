import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div className="h-screen bg-black text-white p-8 flex flex-col gap-5">
      <nav className="flex items-center justify-between  w-full">
        <h1>Logo</h1>
        <div className="flex items-center justify-center gap-20">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <button>Login</button>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
