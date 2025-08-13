import React from "react";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <h1 className="text-2xl font-bold">Smart Focus App</h1>
      <div className="flex items-center gap-4">
        <a href="#features" className="hover:underline">Features</a>
        <a href="#how-it-works" className="hover:underline">How It Works</a>
        <a href="#testimonials" className="hover:underline">Testimonials</a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded"
        >
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
