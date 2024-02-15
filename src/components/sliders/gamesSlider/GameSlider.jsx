import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import {carouselData , sliderImages , contentStyle , sliderStyle} from "../gamesSlider/GameSlider.js"
import "./GameSlider.css";

const GameSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselImageRef = useRef();

  const handleImageClick = (index) => {
    setCurrentImage(index);
    carouselImageRef.current.goTo(index);
  };

  return (
    <>
      <div>
        <Carousel  ref={carouselImageRef}>

          {carouselData.map((element, index) => (

            <div key={index} className="imageContainer" >

              <img 
              src={element.image} 
              style={contentStyle} 
              alt={`Image ${index}`} 
              />

              <div className={element.className}>
              <img 
              width="300px" 
              src={element.logoImage} 
              />

              <h1 dangerouslySetInnerHTML={{ __html: element.title}}></h1>

              <p dangerouslySetInnerHTML={{ __html: element.description }}></p> <br />

              <button>{element.button}</button>

              </div>

            </div>

          ))}
        </Carousel>

        <div className="divSlider">

          {sliderImages.map((image, index) => (

            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => handleImageClick(index)}
              style={sliderStyle}
              className={currentImage === index ? "selected" : "notSelected"}
            />

          ))}

        </div>

      </div>
    </>
  );
};

export default GameSlider;
