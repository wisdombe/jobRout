import "./App.css";
import Homepage from "./components/Homepage";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  const [isMenuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <nav className="bg-yellow-800 sticky top-0 z-10 text-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl hidden lg:block font-bold">
                Job Match Consultancy
              </a>
            </div>
            <div
              className="items-right px-4 cursor-pointer lg:hidden"
              id="burger"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute right-2 top-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>

            <div
              className={`text-sm  lg:flex lg:items-center ${
                isMenuVisible ? "" : "hidden"
              }`}
              id="menu"
            >
              <NavLink
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className="block mt-4 lg:inline-block lg:mt-0 hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0 hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className="block mt-4 lg:inline-block lg:mt-0 hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
