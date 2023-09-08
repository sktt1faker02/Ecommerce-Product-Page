import { useState } from "react";

import iconMenu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import iconClose from "../images/icon-close.svg";

const NavMenu = ({ menus }) => {
  const [navActive, setNavActive] = useState(false);

  const handleNavMenu = () => {
    setNavActive(!navActive);
    // handleClickMenu(!navActive); // For reference only
  };

  return (
    <nav className="padding-section flex justify-between items-center relative flex-wrap">
      {navActive && <div className="fixed top-0 right-0 min-h-screen w-[35%] bg-black opacity-75 z-50" onClick={handleNavMenu}></div>}

      <div className="logo-container flex items-center gap-4">
        <img src={`${navActive ? iconClose : iconMenu}`} alt="menu" className=" w-4 cursor-pointer transition z-20" onClick={handleNavMenu} />
        <img src={logo} alt="sneakers" />
      </div>
      <div className={`${navActive ? "translate-x-0" : "-translate-x-full"} nav-links absolute min-h-screen top-0 left-0 z-10 transition w-[65%] bg-white`}>
        <ul className="mt-[5.75rem] ml-6 flex flex-col gap-[1.188rem]">
          {menus.map((menu, index) => {
            return (
              <li key={index}>
                <a className="text-[1.063rem] font-fw-700" href="#">
                  {menu}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="cart-profile-container flex items-center gap-6">
        <img src={cart} alt="shopping cart" />
        <img src={avatar} alt="profile" className="w-8" />
      </div>
    </nav>
  );
};

export default NavMenu;
