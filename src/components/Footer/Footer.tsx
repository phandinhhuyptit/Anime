import React from "react";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DISCORD_NAME, FACEBOOK_URL, GITHUB_URL } from "ultils/constants";

const Footer = () => {
  return (
    <footer className="footer p-4 w-full bg-background-lighter">
      <div className="w-full flex justify-between items-center">
        <Link
          style={{
            fontWeight: "bold",
            fontSize: "30",
            color: "red",
          }}
          to="/">
          HUYANIME
        </Link>
        <div className="text-white flex items-center space-x-2">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            <AiFillGithub size={20} />
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
            <AiFillFacebook size={20} />
          </a>
          <div className="flex items-center space-x-1">
            <FaDiscord size={20} />
            <p className="text-sm font-medium text-gray-300">{DISCORD_NAME}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
