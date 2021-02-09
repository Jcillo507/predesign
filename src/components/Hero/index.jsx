import React from "react";
import Fade from "react-reveal/Fade";

import HeroImage from "..//../assets/hero.png";

const Hero = () => {

  return (
    <section className="hero">
      <Fade left>
      <div className="hero__image-ctr">
        <img src={HeroImage} />
      </div>
      </Fade>
      <div className="hero__text-ctr">
        <Fade right>
        <div className="hero__bullet-ctr">
          <h2 className="hero__bullets">Developer</h2>
          <h2 className="hero__bullets">Designer</h2>
          <h2 className="hero__bullets">Problem-Solver</h2>
        </div>
        </Fade>
        <Fade bottom>
          <p className="hero__text">
          Bringing Your Ideas to Life,<br/> Digitally.
        </p>
        </Fade>
      </div>
    </section>
  );
};
export default Hero;
