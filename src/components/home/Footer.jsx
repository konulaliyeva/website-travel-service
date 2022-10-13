import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>Tour Service</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
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
        </div>
        <div className="flex justify-between">
          <p>Copyright © 2022 Experience Azerbaijan™. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
