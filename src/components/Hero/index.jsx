import React from "react";
import HeroImage from "..//../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image-ctr">
        <img src={HeroImage} />
      </div>
      <div className="hero__text-ctr">
        <div className="hero__bullet-ctr">
          <h2 className="hero__bullets">Developer</h2>
          <h2 className="hero__bullets">Designer</h2>
          <h2 className="hero__bullets">Problem-Solver</h2>
        </div>
          <p className="hero__text">
          Bringing Your Ideas to Life,<br/> Digitally.
        </p>
      </div>
    </section>
  );
};
export default Hero;
