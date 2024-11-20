import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "./ProductCarousel.css";

const ProductCarousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: products.length > 1, // Only enable infinite scrolling if there are more than 1 product
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
