import React from "react";

import PCard from "../PCard";

import Country from "..//../assets/projects/country.png";
import Company from "..//../assets/projects/company.png";
import Crypto from "..//../assets/projects/CryptoNews.png";
import Late from "..//../assets/projects/dontbelate.png";
import Postr from "..//../assets/projects/Postr.png";
import Venu from "..//../assets/projects/venu.png";

const Projects = () => {

  return (
    <section
      className="projects"
    >
      <div className="projects__intro left">
        <h2 className="projects__title">03. WHAT</h2>
        <h4 className="projects__subtitle">
          I specialize in bringing your ideas to life digitally.
        </h4>
        <p className="projects__info" >
          I am a progressive and insightful devloper, technically and creatively
          skilled, to transform you website ideas into reality.
        </p>
      </div>
      <div className="right">
        <PCard
          image={Company}
          name="Sample Company Website"
          address="https://stupefied-shaw-023514.netlify.com/"
          tech="React | SCSS"
        />
      </div>
      <div className="left">
        <PCard
          image={Crypto}
          name="CryptoNews"
          address="https://jccn.herokuapp.com/"
          tech="React | ExpressJs | SCSS"
        />
      </div>
      <div className="right">
        <PCard
          image={Venu}
          name="Venu"
          address="https://venu-app-v3.herokuapp.com/"
          tech="React | ExpressJs | CSS"
        />
      </div>
      <div className="left">
        <PCard
          image={Country}
          name="Country Info"
          address="http://jccountry.surge.sh/"
          tech="React | SCSS"
        />
      </div>
      <div className="right">
        <PCard
          image={Late}
          name="Dont Be Late"
          address="https://jcillo507.github.io/dont-be-late/"
          tech="Html | CSS"
        />
      </div>
      <div className="left">
        <PCard
          image={Postr}
          name="Postr"
          address="http://postr-jc.surge.sh/"
          tech="React On Rails | CSS"
        />
      </div>
    </section>
  );
};

export default Projects;
