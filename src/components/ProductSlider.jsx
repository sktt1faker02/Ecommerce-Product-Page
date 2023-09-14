import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import imgProduct1 from "../images/image-product-1.jpg";
import imgProduct2 from "../images/image-product-2.jpg";
import imgProduct3 from "../images/image-product-3.jpg";
import imgProduct4 from "../images/image-product-4.jpg";

import thumbNail1 from "../images/image-product-1-thumbnail.jpg";
import thumbNail2 from "../images/image-product-2-thumbnail.jpg";
import thumbNail3 from "../images/image-product-3-thumbnail.jpg";
import thumbNail4 from "../images/image-product-4-thumbnail.jpg";

import { useState } from "react";

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

const ProductSlider = ({ handleClickCurrentPreview }) => {
  const [previewImage, setPreviewImage] = useState(0);
  // const [thumbIndex, setThumbIndex] = useState(0);
  // const [zoomIn, setZoomIn] = useState(false);

  const handleThumbnailClick = (index) => {
    setPreviewImage(index);
    // setThumbIndex(index);
    // handleThumbs(index);
  };

  const showFullView = () => {
    handleClickCurrentPreview(previewImage);
  };

  return (
    <>
      <Splide
        tag="section"
        className="mb-[24px] mobile-slider"
        options={{
          autoplay: true,
          type: "loop",
          pagination: false,
          classes: {
            prev: "splide__arrow--prev slider-btn-prev",
            next: "splide__arrow--next slider-btn-next",
          },
        }}
        aria-label="Product Images"
      >
        {productData.map((product, index) => {
          return (
            <SplideSlide key={index}>
              <img src={product.img} alt="product image" />
            </SplideSlide>
          );
        })}
      </Splide>

      <section className="desktop-slider px-[1.5rem] lg:px-[0]">
        <img src={productData[previewImage].img} alt="sneaker preview" width={445} height={445} className={`rounded-[15px] shadow-sm mb-[30px] cursor-pointer`} onClick={showFullView} />
        <div className="thumbnail-container flex gap-[29px] cursor-pointer">
          {imageThumbnails.map((thumb, index) => {
            return (
              <div key={thumb.id} className={`rounded-[10px] overflow-hidden transition hover:-translate-y-1 ${previewImage === index ? "border-2 border-orange" : ""}`}>
                <img src={thumb.img} width={88} height={88} className={`${previewImage === index ? "opacity-20" : ""} hover:opacity-50`} alt="sneaker thumbnail" onClick={() => handleThumbnailClick(index)} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductSlider;
