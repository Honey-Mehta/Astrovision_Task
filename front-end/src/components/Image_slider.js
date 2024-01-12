// ImageSlider.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const ImageSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="%PUBLIC_URL%/images/download (1).jfif"
          alt="First slide"
         />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="url_to_your_second_slide_image"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="url_to_your_third_slide_image"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
