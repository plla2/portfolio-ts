import { useState } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/Logo.png";
import { navLinks } from "../../constant/Const";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
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
          <img
            src={Logo}
            alt="로고 이미지"
            className="w-18 h-9 object-contain"
          />
          <p className="text-[18px] font-bold cursor-pointer flex"></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 text-grayscale-200">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-grayscale-950"
                    : "text-grayscale-200"
                } hover:text-primary-500 text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center"></div>
      </div>
    </nav>
  );
};

export default Navbar;
