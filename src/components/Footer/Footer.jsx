import React from "react";
import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterLinks1 = [
  {
    key:1,
    title: "Home",
    link: "/",
  },
  {
    key:2,
    title: "AboutUs",
    link: "/about",
  },
  {
    key:3,
    title: "Contact",
    link: "/contact",
  },
  {
    key:4,
    title: "Country",
    link: "/best-places",
  },
];
const FooterLinks2 = [
  {
    key:1,
    title: "Services",
    link: "/services",
  },
  {
    key:2,
    title: "Blog",
    link: "/blog",
  },
  {
    key:3,
    title: "Succesful Story",
    link: "/success-story",
  },
]

const Footer = () => {
  return (
    <>
      <div className=" dark:bg-gray-950 py-10 relative overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-thin sm:text-left text-black">
                <span className=" flex items-center">
                <img src={FooterLogo} alt="" className="h-40" /> Fairmont Consultancy
                </span>
              </h1>
              <p className="flex items-center gap-3 px-6 mt-4">
                info.fairmont@gmail.com
              </p>
              <div className="flex items-center gap-3  mt-3">
                <FaLocationArrow />
                <p>
                  Chuchepati Chowk, Chabahil, 2nd attached House to Sanima Bank
                </p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+977-01-5916120, 9869060120</p>
              </div>
              {/* social handles */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-40 ">
              <div>
                <div className="py-8 px-4">
                  <ul className="flex flex-col gap-3">
                    {FooterLinks1.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200 grid grid-cols-2">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          {" "}
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <ul className="flex flex-col gap-3">
                    {FooterLinks2.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200 grid grid-cols-2">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          {" "}
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
              @copyright 2024 All rights reserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
