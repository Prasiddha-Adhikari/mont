import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "AboutUs",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Country",
    link: "/country",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Blog",
    link: "/blogs",
  },
  {
    name: "Succesful Story",
    link: "/succesful-story",
  }
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="sticky top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="hidden md:block ">
              <ul className="flex items-end gap-4">
                <li className="py-4">
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/about" activeClassName="active">
                    AboutUs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/contact" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/country" activeClassName="active">
                    Country
                  </NavLink>
                </li>
                <div className="flex items-center gap-4 font-light px-12 text-2xl">
              <Link to={"/"}>
              <span className="flex items-center">
              <img src={Logo} alt="" className="h-20" />
              Fairmont Consultancy
              </span>
                
              </Link>
            </div>
                <li className="py-4">
                  <NavLink to="/services" activeClassName="active">
                    Services
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/blogs" activeClassName="active">
                    Blog
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/succesful-story" activeClassName="active">
                    Succesful Story
                  </NavLink>
                </li>
                
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <NavLink to='/apply'
                className="bg-blue-600 text-white px-3 py-1 rounded-full" >
                Apply Now
              </NavLink>
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
