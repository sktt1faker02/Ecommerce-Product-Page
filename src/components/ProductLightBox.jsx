import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import iconClose from "../images/icon-close.svg";
import { useState } from "react";
import { useRef } from "react";

import imgProduct1 from "../images/image-product-1.jpg";
import imgProduct2 from "../images/image-product-2.jpg";
import imgProduct3 from "../images/image-product-3.jpg";
import imgProduct4 from "../images/image-product-4.jpg";

import thumbNail1 from "../images/image-product-1-thumbnail.jpg";
import thumbNail2 from "../images/image-product-2-thumbnail.jpg";
import thumbNail3 from "../images/image-product-3-thumbnail.jpg";
import thumbNail4 from "../images/image-product-4-thumbnail.jpg";

const productData = [
  { id: 1, img: imgProduct1 },
  { id: 2, img: imgProduct2 },
  { id: 3, img: imgProduct3 },
  { id: 4, img: imgProduct4 },
];

const imageThumbnails = [
  { id: 1, img: thumbNail1 },
  { id: 2, img: thumbNail2 },
  { id: 3, img: thumbNail3 },
  { id: 4, img: thumbNail4 },
];

const ProductLightBox = ({ previewImageIndex, closeFullView }) => {
  const [thumbIndex, setThumbIndex] = useState(0);

  const thumbNailOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    pagination: false,
    width: "550px",
    height: "550px",
    start: previewImageIndex,
    classes: {
      prev: "splide__arrow--prev slider-btn-prev",
      next: "splide__arrow--next slider-btn-next",
    },
  };

  const mainRef = useRef(null);

  const handleThumbs = (index) => {
    if (mainRef.current) {
      mainRef.current.go(index);
      //   setPreviewImage(index);
    }
  };

  const syncSlide = (index) => {
    setThumbIndex(index);
    // setPreviewImage(index);
  };

  const onClose = () => {
    closeFullView();
  };

  return previewImageIndex !== null ? (
    <>
      <div className="fixed top-0 right-0 min-h-screen w-[100%] bg-black opacity-75 z-50" onClick={onClose}></div>

      <div className="zoom-in-product relative z-50">
        <img src={iconClose} alt="close lightbox" className="close-lightbox" onClick={onClose} />

        <div className="flex flex-col items-center justify-center gap-[40px]">
          <Splide onMove={(_, index) => syncSlide(index)} options={thumbNailOptions} ref={mainRef}>
            {productData.map((img) => {
              return (
                <SplideSlide key={img.id} className="rounded-[15px] overflow-hidden shadow-sm">
                  <img src={img.img} alt="product image" />
                </SplideSlide>
              );
            })}
          </Splide>

          <ul className="flex gap-[29px]">
            {imageThumbnails?.map((thumbnail, index) => (
              <li key={thumbnail.id}>
                <button className={`thumbnail-img relative rounded-[10px] overflow-hidden transition hover:-translate-y-1 ${thumbIndex === index ? "border-2 border-orange thumb-active" : ""}`} onClick={() => handleThumbs(index)}>
                  <img src={thumbnail.img} alt="product thumbnail" width={88} height={88} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  ) : null;
};

export default ProductLightBox;
