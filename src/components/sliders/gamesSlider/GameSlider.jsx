import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import finalFantasyCarousel from "../../../assets/Images/gameSliderImages/final-fantasy.webp";
import helldiversCarousel from "../../../assets/Images/gameSliderImages/helldivers.webp";
import foamstarsCarousel from "../../../assets/Images/gameSliderImages/foamstars.webp";
import tekken8Carousel from "../../../assets/Images/gameSliderImages/tekken8-hero.webp";
import callofdutyCarousel from "../../../assets/Images/gameSliderImages/callofduty.webp";
import suicidesquadCarousel from "../../../assets/Images/gameSliderImages/Suicide-Squad.webp";
import honkaiStarrailCarousel from "../../../assets/Images/gameSliderImages/HonkaiStarrail-hero.webp";
import foamstarsSlider from "../../../assets/Images/gameSliderImages/foamstarsSlider.webp";
import callofdutySlider from "../../../assets/Images/gameSliderImages/callofdutySlider.webp";
import suicideSquadSlider from "../../../assets/Images/gameSliderImages/suicideSquadSlider.webp";
import tekken8Slider from "../../../assets/Images/gameSliderImages/tekken8Slider.webp";
import HonkaiStarrailSlider from "../../../assets/Images/gameSliderImages/HonkaiStarrailSlider.webp";
import "./GameSlider.css";

const GameSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselImageRef = useRef();

  const carouselData = [
    {
      title : `The galaxy's last line of offence`,
      description : `Take up the mantle of liberty, join the Helldivers and fight for freedom across a hostile galaxy, in this new multiplayer co-op shooter for PS5 & PC`,
      button : 'Available Now',
      image : helldiversCarousel,
      className : 'helldiversSlide'
    },
    {
      title : `The unknown journey continues`,
      description : `Play as Cloud or Sephiroth in the Final Fantasy VII Rebirth demo, out now on PS5. Unveil the opening chapter and choose your adventure.`,
      button : 'Find Out More',
      image : finalFantasyCarousel,
      className : 'finalFantasySlide'

    },
    {
      title : `Join the foam-blasting frenzy!`,
      description : `Blast through frantic 4v4 battles using foam to attack, build and defend in this foam party shooter, out now for PlayStation Plus members.`,
      button : 'Find Out More',
      image : foamstarsCarousel,
      className : 'foamstarsSlide'

    },
    {
      title : `Fist meets fate`,
      description : `The Mishima saga continues. Experience the epic new story featuring dozens of extraordinary fighters, out now on PS5.`,
      button : 'Find Out More',
      image : tekken8Carousel,
      className : 'tekken8Slide'

    },
    {
      title : `Return to Fortune's Keep`,
      description : `Season 2 brings players back to Fortune's Keep, but after a recent event, the undead hordes have made the island their home...`,
      button : 'Find Out More',
      image : callofdutyCarousel,
      className : 'callofdutySlide'

    },
    {
      title : `Welcome to Task Force X`,
      description : `Play Suicide Squad: Kill the Justice League with your friends, out now on PlayStation 5.`,
      button : 'Find Out More',
      image : suicideSquadSlider,
      className : 'suicideSquadSlide'

    },
    {
      title : `Version 2.0 is out now`,
      description : `Your invitation to Penacony has arrived. Try the new space fantasy RPG from the company behind Genshin Impact and experience unmatched dreams.`,
      button : 'Find Out More',
      image : honkaiStarrailCarousel,
      className : 'honkaiStarrailSlide'

    }
  ]

  const sliderImages = [
    helldiversCarousel,
    finalFantasyCarousel,
    foamstarsSlider,
    tekken8Slider,
    callofdutySlider,
    suicideSquadSlider,
    HonkaiStarrailSlider,
  ];

  const contentStyle = {
    height: "500px",
    width: "100%",
    color: "#fff",
  };

  const sliderStyle = {
    height: "110px",
    width: "180px",
    borderRadius: "20px",
    color: "#fff",
    marginRight: "5px",
    cursor: "pointer",
    margin: "0 5px",
    padding: "5px 5px",
  };

  const handleImageClick = (index) => {
    setCurrentImage(index);
    carouselImageRef.current.goTo(index);
  };
  console.log("current ima", currentImage);
  return (
    <>
      <div>
        <Carousel  ref={carouselImageRef}>
          {carouselData.map((element, index) => (
            <div key={index} className="imageContainer" >
              <img src={element.image} style={contentStyle} alt={`Image ${index}`} />
              <div className={element.className}>
              <h1>{element.title}</h1>
              <p>{element.description}</p> <br />
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
