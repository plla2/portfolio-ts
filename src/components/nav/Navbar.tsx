import { useState } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import close from "../../assets/navIcon/close.svg";
import menu from "../../assets/navIcon/menu.svg";
import { navLinks } from "../../constant/Const";
import { LazyMotion, domAnimation, m } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary backdrop-blur-sm`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
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
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 text-grayscale-200">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-primary-400"
                    : "text-grayscale-200"
                } hover:text-primary-400 text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
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
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title
                        ? "text-grayscale-950"
                        : "text-grayscale-200"
                    } font-medium cursor-pointer hover:bg-primary-600 hover:rounded-md`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.title}`}>{link.title}</a>
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
