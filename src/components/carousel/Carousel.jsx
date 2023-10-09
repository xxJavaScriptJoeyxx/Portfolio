import React, { useState } from 'react';


import hackerOwl from "../carousel/hackerOwl.png"
import owlPic2 from "../carousel/owlPic2.png"
import owlPic3 from "../carousel/owlPic3.png"
import owlPic4 from "../carousel/owlPic4.png"

const Carousel = () => {
  const images = [hackerOwl, owlPic2, owlPic3, owlPic4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carouselContainer">
      <img src={images[currentImageIndex]} alt="hacker owl" />

      <div className="buttonDiv">
        <button type="button" onClick={prevImage}>
          Prev
        </button>
        <button type="button" onClick={nextImage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;