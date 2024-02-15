import finalFantasyCarousel from "../../../assets/Images/gameSliderImages/finalfantasycarousel.webp"
import helldiversCarousel from "../../../assets/Images/gameSliderImages/helldivers.webp";
import foamstarsCarousel from "../../../assets/Images/gameSliderImages/foamstars.webp";
import tekken8Carousel from "../../../assets/Images/gameSliderImages/tekken8-hero.webp";
import callofdutyCarousel from "../../../assets/Images/gameSliderImages/callofduty.webp";
import suicidesquadCarousel from "../../../assets/Images/gameSliderImages/Suicide-Squad.webp";
import honkaiStarrailCarousel from "../../../assets/Images/gameSliderImages/HonkaiStarrail-hero.webp";

import finalFantasySlider from "../../../assets/Images/gameSliderImages/final-fantasy.webp";
import foamstarsSlider from "../../../assets/Images/gameSliderImages/foamstarsSlider.webp";
import callofdutySlider from "../../../assets/Images/gameSliderImages/callofdutySlider.webp";
import suicideSquadSlider from "../../../assets/Images/gameSliderImages/suicideSquadSlider.webp";
import tekken8Slider from "../../../assets/Images/gameSliderImages/tekken8Slider.webp";
import HonkaiStarrailSlider from "../../../assets/Images/gameSliderImages/HonkaiStarrailSlider.webp";

import foamstarslogo from "../../../assets/Images/gameSliderImages/foamstars-logo.webp";
import callofdutylogo from "../../../assets/Images/gameSliderImages/callofduty-logo.webp";
import honkaistarlogo from "../../../assets/Images/gameSliderImages/Honkaistar-logo.webp";
import suicidesquadlogo from "../../../assets/Images/gameSliderImages/suicidesquad-logo.webp";
import tekken8logo from "../../../assets/Images/gameSliderImages/tekken8-logo.webp";
import finalfantasylogo from "../../../assets/Images/gameSliderImages/finalfantasy-logo.webp"

const carouselData = [
    {
      title : `The galaxy's last line of <br> offence`,
      description : `Take up the mantle of liberty, join the Helldivers and<br>fight for freedom across a hostile galaxy, in this new <br> multiplayer co-op shooter for PS5 & PC`,
      button : 'Available Now',
      image : helldiversCarousel,
      className : 'helldiversSlide'
    },
    {
      title : `The unknown journey <br> continues`,
      description : `Play as Cloud or Sephiroth in the Final Fantasy VII Rebirth <br> demo, out now on PS5. Unveil the opening chapter and <br> choose your adventure.`,
      button : 'Find Out More',
      image : finalFantasyCarousel,
      className : 'finalFantasySlide',
      logoImage : finalfantasylogo

    },
    {
      title : `Join the foam-blasting <br> frenzy!`,
      description : `Blast through frantic 4v4 battles using foam to attack,<br> build and defend in this foam party shooter,out now <br> for PlayStation Plus members.`,
      button : 'Find Out More',
      image : foamstarsCarousel,
      className : 'foamstarsSlide',
      logoImage : foamstarslogo

    },
    {
      title : `Fist meets fate`,
      description : `The Mishima saga continues. Experience  the epic new <br> story featuring dozens of extraordinary fighters, out now <br> on PS5.`,
      button : 'Find Out More',
      image : tekken8Carousel,
      className : 'tekken8Slide',
      logoImage : tekken8logo

    },
    {
      title : `Return to Fortune's <br> Keep`,
      description : `Season 2 brings players back to Fortune's Keep, but after <br> a recent event, the undead hordes have made the island <br> their home...`,
      button : 'Find Out More',
      image : callofdutyCarousel,
      className : 'callofdutySlide',
      logoImage : callofdutylogo

    },
    {
      title : `Welcome to Task Force<br> X`,
      description : `Play Suicide Squad: Kill the Justice League with your<br> friends, out now on PlayStation 5.`,
      button : 'Find Out More',
      image : suicidesquadCarousel,
      className : 'suicideSquadSlide',
      logoImage : suicidesquadlogo

    },
    {
      title : `Version 2.0 is out now`,
      description : `Your invitation to Penacony has arrived. Try the new space <br>fantasy RPG from the company behind Genshin Impact and <br>experience unmatched dreams.`,
      button : 'Find Out More',
      image : honkaiStarrailCarousel,
      className : 'honkaiStarrailSlide',
      logoImage : honkaistarlogo

    }
  ]

  const sliderImages = [
    helldiversCarousel,
    finalFantasySlider,
    foamstarsSlider,
    tekken8Slider,
    callofdutySlider,
    suicideSquadSlider,
    HonkaiStarrailSlider,
  ];

  const contentStyle = {
    height: "60vh",
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


export {carouselData , sliderImages , contentStyle , sliderStyle}