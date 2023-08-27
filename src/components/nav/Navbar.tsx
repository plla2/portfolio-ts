import { useState } from "react";
import { styles } from "../../styles";
import close from "../../assets/navIcon/close.svg";
import menu from "../../assets/navIcon/menu.svg";
import { navLinks } from "../../constant/Const";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-primary backdrop-blur-sm`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <NavLink
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <LazyMotion features={domAnimation}>
            <m.p
              initial={{ x: 0 }}
              whileHover={{ x: 15, opacity: 0.65 }}
              className="text-[30px] font-bold cursor-pointer flex text-grayscale-200 "
            >
              PLLA2
            </m.p>
          </LazyMotion>
        </NavLink>
        <ul className="hidden sm:flex flex-row gap-10 text-grayscale-200">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className="text-[18px] font-bold cursor-pointer before:ml-auto after:content-[''] after:w-[0%] after:h-[2px] after:bg-primary-600 after:block after:duration-500 before:content-[''] before:w-[0%] before:h-[2px] before:bg-primary-600 before:block before:duration-500 hover:after:w-full hover:before:w-full"
              >
                <Link
                  activeClass="active"
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={150}
                  isDynamic={true}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            onClick={() => setToggle(!toggle)}
            className="w-[35px] h-[35px] object-contain cursor-pointer rounded-md z-20 hover:bg-primary-400 hover:bg-opacity-50"
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } pt-15 p-6 absolute top-2 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-primary-400 bg-opacity-50`}
          >
            <ul className="flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className="text-[18px] font-bold cursor-pointer"
                  >
                    <Link
                      activeClass="active"
                      to={link.id}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={200}
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
