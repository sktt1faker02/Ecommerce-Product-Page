import plusIcon from "../images/icon-plus.svg";
import minusIcon from "../images/icon-minus.svg";
import cartIcon from "../images/icon-cart.svg";
import { useState } from "react";

export const ProductDetails = ({ handleClickAddCart }) => {
  const [cartNumber, setCartNumber] = useState(0);

  const handleCartCountIncrease = () => {
    setCartNumber(cartNumber + 1);
  };

  const handleCartCountDecrease = () => {
    if (cartNumber !== 0) {
      setCartNumber(cartNumber - 1);
    }
  };

  const handleAddToCart = () => {
    if (cartNumber !== 0) {
      handleClickAddCart(cartNumber);

      setCartNumber(0); // Reset the cart number after adding to cart
    }
  };

  return (
    <article className="product-details-container px-6 lg:px-0">
      <h2 className="uppercase font-fw-700 text-[0.75rem] tracking-[2.24px] text-orange mb-[14px]">Sneaker Company</h2>
      <h1 className="text-[28px] font-fw-700 leading-8 mb-[16px] min-[900px]:text-[44px] min-[48px]:leading-[48px]"> Fall Limited Edition Sneakers</h1>
      <p className="description font-medium text-[14px] tracking-[0.64px] leading-[25px] text-dark-grayish-blue mb-[30px]">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.</p>
      <div className="pricing-container flex justify-between items-center mb-[27px] min-[900px]:flex-col">
        <div className="price flex items-center gap-2">
          <span className="font-fw-700 text-[1.875rem] text-very-dark-blue">$125.00</span>
          <span className="px-[10px] py-[5px] rounded-md shadow-sm bg-pale-orange text-orange font-fw-700">50%</span>
        </div>
        <s className="discount font-fw-700 tracking-[0.48px] text-very-dark-blue">$250.00</s>
      </div>
      <div className="quantity-cart-container flex flex-col gap-4 mb-8">
        <div className="quantity-container flex items-center justify-between py-[17px] px-[25px] bg-light-grayish-blue rounded-[10px] shadow-sm">
          <button className="btn-decrease hover:opacity-75 transition" onClick={handleCartCountDecrease}>
            <img src={minusIcon} alt="decrease item" />
          </button>
          <span className="item-quantity font-fw-700 tracking-[1.28px] w-[30px] text-center">{cartNumber}</span>

          <button className="btn-increase hover:opacity-75 transition" onClick={handleCartCountIncrease}>
            <img src={plusIcon} alt="add item" />
          </button>
        </div>
        <button className="btn-add-cart bg-orange font-fw-700 flex justify-center items-center text-white p-[17px] rounded-[10px] shadow-sm gap-4 min-[900px]:w-[237px] transition" onClick={handleAddToCart}>
          <img className="" src={cartIcon} alt="Add to cart" />
          Add to cart
        </button>
      </div>
    </article>
  );
};
