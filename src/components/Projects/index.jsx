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
    <section className="projects">
      <div className="projects__text">
        <h2 className="projects__title">03. WHAT</h2>
      </div>
      <div className="projects-card-ctr">
        <PCard
          image={Company}
          name="Sample Company Website"
          desc="Single Page Company Website"
          address="https://stupefied-shaw-023514.netlify.com/"
          tech="React | Sass"
        />
        <PCard
          image={Crypto}
          name="CryptoNews"
          desc="Crypto currency coin tracker"
          address="https://jccn.herokuapp.com/"
          tech="React | ExpressJs | Sass"
        />
        <PCard
          image={Venu}
          name="Venu"
          desc="Restuarant Website Aggregator"
          address="https://venu-app-v3.herokuapp.com/"
          tech="React | ExpressJs | CSS"
        />
        <PCard
          image={Country}
          name="Country Info"
          desc="REST Country API"
          address="http://jccountry.surge.sh/"
          tech="React | Sass"
        />
        <PCard
          image={Late}
          name="Dont Be Late"
          desc="Obstacle Aversion Game"
          address="https://jcillo507.github.io/dont-be-late/"
          tech="Html | CSS"
        />
        <PCard
          image={Postr}
          name="Postr"
          desc="Twitter Clone"
          address="http://postr-jc.surge.sh/"
          tech="React On Rails | CSS"
        />
      </div>
    </section>
  );
};

export default Projects;
