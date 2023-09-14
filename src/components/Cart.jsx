import imageProduct1 from "../images/image-product-1-thumbnail.jpg";
import iconRemove from "../images/icon-delete.svg";
import { useState, useRef } from "react";

const Cart = ({ cartRef, cartItem, resetCart }) => {
  const sneakerPrice = 125;
  let totalPrice = sneakerPrice * cartItem;

  const [isEmpty, setIsEmpty] = useState(cartItem === 0);
  const cartContainerRef = useRef(null); // Ref to the Cart container

  const handleRemoveItemClick = (event) => {
    event.stopPropagation();
    setIsEmpty(true);
    resetCart();
  };

  return (
    <div
      ref={(node) => {
        cartRef.current = node;
        cartContainerRef.current = node;
      }}
      className={`container-cart  bg-white absolute top-0 left-0 rounded-[10px] shadow-lg z-10 h-[257px]`}
    >
      <div className="cart-details-container px-[24px] py-[27px] ">
        <h3 className="text-[15px] font-fw-700 text-very-dark-blue">Cart</h3>
      </div>
      <div className="line h-[1px] bg-light-grayish-blue shadow-sm"></div>

      {isEmpty ? ( // Conditionally render the message based on cartItem value
        <div className="cart-item-details-container h-[180.5px] px-[24px] py-[27px] flex justify-center items-center flex-col">
          <p className={`text-dark-grayish-blue font-fw-700 text-[15px]`}>Your cart is empty.</p>
        </div>
      ) : (
        // Render the cart item details when cartItem is not 0
        <div className="cart-item-details-container h-[180.5px] px-[24px] py-[27px] flex justify-center items-center flex-col gap-[28px]">
          <div className="cart-total-details flex items-center gap-2 justify-between w-full">
            <img src={imageProduct1} className="rounded-[4px] shadow-sm" width="50" height="50" alt="sneaker is on the cart" />
            <div className="cart-product-description">
              <h3 className="font-medium">Fall Limited Edition Sneakers</h3>
              <span className="price-tag font-medium">
                {`$${sneakerPrice.toFixed(2)}`} x {cartItem}
              </span>
              <span className="total-price font-fw-700 ml-1">{`$${totalPrice.toFixed(2)}`}</span>
            </div>
            <img className="btn-remove-cart cursor-pointer transition" src={iconRemove} alt="remove item to cart" onClick={handleRemoveItemClick} />
          </div>
          <button className="btn-checkout bg-orange font-fw-700 p-[17px] rounded-[10px] shadow-sm text-white w-full">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
