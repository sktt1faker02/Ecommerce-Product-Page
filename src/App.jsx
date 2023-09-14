import NavMenu from "./components/NavMenu";
import ProductSlider from "./components/ProductSlider";
import { ProductDetails } from "./components/ProductDetails";
import ProductLightBox from "./components/ProductLightBox";
import Cart from "./components/Cart";
import { useState, useEffect, useRef } from "react";

const headerMenu = ["Collections", "Men", "Women", "About", "Contact"];

const App = () => {
  // For Reference only to check if the nav is active
  // const [isNavActive, setIsNavActive] = useState(false);

  // const handleClickMenu = (navActive) => {
  //   setIsNavActive(navActive);
  // };

  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState(0);
  const cartRef = useRef(null); // Ref to the Cart component
  const openCartRef = useRef(null);
  const [previewImageIndex, setPreviewImageIndex] = useState(null);

  const handleClickAddCart = (cartNumber) => {
    setCartItem(cartItem + cartNumber);
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const resetCart = () => {
    setCartItem(0);
  };

  // For Lightbox
  const handleClickCurrentPreview = (currentIndex) => {
    setPreviewImageIndex(currentIndex);
  };

  const closeFullView = () => {
    setPreviewImageIndex(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click occurred outside the Cart component
      if (cartRef.current && !cartRef.current.contains(event.target) && openCartRef.current && !openCartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };

    // Add the event listener when the Cart is open
    if (showCart) {
      document.addEventListener("click", handleClickOutside);
    }

    // Remove the event listener when the Cart is closed
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showCart]);

  return (
    <>
      <header>
        <NavMenu menus={headerMenu} handleShowCart={handleShowCart} openCartRef={openCartRef} cartItem={cartItem} />
      </header>
      <main className="relative">
        {showCart && <Cart cartRef={cartRef} cartItem={cartItem} resetCart={resetCart} />}
        <ProductSlider handleClickCurrentPreview={handleClickCurrentPreview} />
        <ProductDetails handleClickAddCart={handleClickAddCart} />
        <ProductLightBox previewImageIndex={previewImageIndex} closeFullView={closeFullView} />
      </main>
      <footer className="py-8 text-center ">
        Challenge by <span className="text-orange">Frontend Mentor</span>. Coded by <span className="text-orange">Michael Tabilin</span>
      </footer>
    </>
  );
};

export default App;
