import imgProduct1 from "../images/image-product-1.jpg";
import imgProduct2 from "../images/image-product-2.jpg";
import imgProduct3 from "../images/image-product-3.jpg";
import imgProduct4 from "../images/image-product-4.jpg";
import iconPrev from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";
import { useState } from "react";

const productData = [
  { id: 1, img: imgProduct1 },
  { id: 2, img: imgProduct2 },
  { id: 3, img: imgProduct3 },
  { id: 4, img: imgProduct4 },
];

const ProductSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevSlideBtn = () => {
    // setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? productData.length - 1 : prevIndex - 1));
    // if (currentImageIndex === 0) {
    //   setCurrentImageIndex(imgData.length - 1);
    // } else {
    //   setCurrentImageIndex(currentImageIndex - 1);
    // }
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const nextSlideBtn = () => {
    // setCurrentImageIndex((prevIndex) => (prevIndex === productData.length - 1 ? 0 : prevIndex + 1));
    // if (currentImageIndex === imgData.length - 1) {
    //   setCurrentImageIndex(0);
    // } else {
    //   setCurrentImageIndex(currentImageIndex + 1);
    // }

    setCurrentImageIndex(currentImageIndex + 1);
  };

  return (
    <section className="product-slider relative flex items-center">
      {/* <img src={productData[currentImageIndex].img} className={slideEffect} alt="sneaker product" /> */}
      {productData.map((img, index) => {
        let position = "nextSlide";
        if (index === currentImageIndex) {
          position = "activeSlide";
        }

        // console.log(index, currentImageIndex, currentImageIndex - 1);
        // console.log(index === currentImageIndex - 1);

        if (index === currentImageIndex - 1 || (currentImageIndex === 0 && index === productData.length - 1)) {
          position = "lastSlide";
        }

        return <img src={img.img} className={`${position} absolute top-0 left-0 opacity-0 transition`} alt="sneaker product" key={index} />;
      })}
      <div className="slider-button absolute w-full flex justify-between px-4">
        <button className="prev w-[40px] h-[40px] bg-white rounded-[50%] shadow-sm" onClick={prevSlideBtn}>
          <img src={iconPrev} className="mx-auto" alt="previous product" />
        </button>
        <button className="next w-[40px] h-[40px] bg-white rounded-[50%] shadow-sm" onClick={nextSlideBtn}>
          <img src={iconNext} className="mx-auto" alt="next product" />
        </button>
      </div>
    </section>
  );
};

export default ProductSlider;
