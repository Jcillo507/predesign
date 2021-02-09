import React from 'react'
import InfoImage from "..//../assets/info-image.png";
import Fade from "react-reveal/Fade";

const Info = ()=>{
  return (
    <section className="info">
      <Fade left>
        <img src={InfoImage} alt="info image" className="info__image" />
      </Fade>
      <Fade right>
        <blockquote className="info__text-ctr">
          <p className="info__title">01. WHO</p>
          <h3 className="info__heading">
            I am a creative front end <br />
            developer and designer <br />
            based in New York
          </h3>
          <p className="info__text">
            I am a software engineer passionate about helping companies deliver
            great client experiences. I take insight from my experience in
            client-facing roles and have merged them with my technical skills as
            an engineer. I am a problem solver who strives under pressure and
            looks at every problem as an opportunity to learn and grow. I adjust
            and adapt to any situation to help my teammates and myself grow and
            achieve results to create the best product.
          </p>
        </blockquote>
      </Fade>
    </section>
  );
}

export default Info