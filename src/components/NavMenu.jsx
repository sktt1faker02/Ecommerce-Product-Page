import { useState } from "react";

import iconMenu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import iconClose from "../images/icon-close.svg";

const NavMenu = ({ menus, handleShowCart, openCartRef, cartItem }) => {
  const [navActive, setNavActive] = useState(false);

  const handleNavMenu = () => {
    setNavActive(!navActive);
    // handleClickMenu(!navActive); // For reference only
  };

  const handleClickShowCart = () => {
    handleShowCart();
  };

  return (
    <>
      <nav className="nav padding-section flex justify-between items-center relative flex-wrap">
        {navActive && <div className="fixed top-0 right-0 min-h-screen w-[35%] bg-black opacity-75 z-50" onClick={handleNavMenu}></div>}

        <div className="logo-container flex items-center gap-4">
          <img src={`${navActive ? iconClose : iconMenu}`} alt="menu" className={`w-4 cursor-pointer transition z-[999] ${navActive && "fixed"} md:hidden`} onClick={handleNavMenu} />
          <a href="/">
            <img src={logo} alt="sneakers" />
          </a>
        </div>
        <div className={`${navActive ? "translate-x-0" : "-translate-x-full"} nav-links fixed min-h-screen top-0 left-0 z-50 transition w-[65%] bg-white`}>
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

        <div className="cart-profile-container flex items-center gap-6 lg:gap-8">
          <div ref={openCartRef} className="cart-items-container relative cursor-pointer" onClick={handleClickShowCart}>
            <img className="myCart" src={cart} alt="shopping cart" />
            <span className="cart-badge-number px-[7.2px]  bg-orange text-white rounded-[9px] font-fw-700 text-[10px] absolute top-0 right-0 translate-x-[50%] -translate-y-[50%]">{`${cartItem === 0 ? "" : cartItem}`}</span>
          </div>
          <div className="avatar-profile">
            <img src={avatar} alt="profile" className="w-8" />
          </div>
        </div>
      </nav>
      <div className="nav-line min-[900px]:block h-[1px] bg-grayish-blue shadow-sm mb-[91px]"></div>
    </>
  );
};

export default NavMenu;
