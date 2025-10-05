import React from 'react';
import './Hero.css';
import HeroImg from '../assets/hero__img.svg';
import HeroModify from '../assets/heroModify.svg';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <h1 className="hero__heading">
          frontend <span className="hero__heading--highlight">developer</span>
        </h1>
        <div className="hero__buttons">
          <button className="hero__button hero__button--contact"><a href="#contact">Contact</a></button>
          <button className="hero__button hero__button--download"><a href="">Download CV</a></button>
        </div>
      </div>

      <div className="hero__images">
        <img className="hero__image hero__image--bg" src={HeroModify} alt="Background" />
        <img className="hero__image hero__image--front" src={HeroImg} alt="Front" />
      </div>
    </section>
  );
}

export default Hero;