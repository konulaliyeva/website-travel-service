import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <h1 className={logo ? "hidden" : "block"}>Tour Service</h1>
      </div>
      <ul className="hidden md:flex cursor-pointer">
        <li>
          <Link to="#home">Home</Link>
        </li>
        <li>
          <Link to="#resort">Resorts</Link>
        </li>
        <li>
          <Link to="#info">Info</Link>
        </li>
        <li>
          <Link to="#destination">Destinations</Link>
        </li>
        <li>
          <Link to="#view">View</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>Tour Service</h1>

          <li className="border-b">
            <Link to="#home">Home</Link>
          </li>
          <li className="border-b">
            <Link to="#resort">Resorts</Link>
          </li>
          <li className="border-b">
            <Link to="#book">Info</Link>
          </li>
          <li className="border-b">
            <Link to="#destination">Destinations</Link>
          </li>
          <li className="border-b">
            <Link to="#view">view</Link>
          </li>
          <div className="flex flex-col">
            <button onClick={() => navigate("/profile")}>Login</button>
          </div>
          <div className="flex justify-between my-6">
          <a
              href="https://www.instagram.com/visitazerbaijan/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="icon" />
            </a>
            <a
              href="https://twitter.com/azerbaijantour?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://www.youtube.com/c/ExperienceAzerbaijan/channels"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="icon" />
            </a>
            <a
              href="https://www.pinterest.com/journalofnomads/azerbaijan-travel/"
              target="_blank"
              rel="noreferrer"
            >
              <FaPinterest className="icon" />
            </a>

            <a href="https://www.instagram.com/visitazerbaijan/?hl=en">
              <FaInstagram className="icon" />
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
