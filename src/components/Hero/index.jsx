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
          <p className="info-text">
            I am a software engineer passionate about helping companies deliver
            great client experiences. I take insight from my experience in
            client-facing roles and have merged them with my technical skills as
            an engineer. I am a problem solver who strives under pressure and
            looks at every problem as an opportunity to learn and grow. I adjust
            and adapt to any situation to help my teammates and myself grow and
            achieve results to create the best product.
          </p>
      </div>
    </section>
  );
};
export default Hero;
