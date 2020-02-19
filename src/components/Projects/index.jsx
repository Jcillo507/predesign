import React from "react";

import PCard from "../PCard";

import BetThat from "..//../assets/projects/betthat.png";
import Company from "..//../assets/projects/company.png";
import Crypto from "..//../assets/projects/CryptoNews.png";
import Late from "..//../assets/projects/dontbelate.png";
import Postr from "..//../assets/projects/Postr.png";
import Venu from "..//../assets/projects/venu.png";

import "./projects.scss";

const Projects = () => {
  return (
    <div className="projects-ctr">
      <h2 className='projects-title'>Projects</h2>
      <div className='projects-card-ctr'>
        <PCard image={BetThat} />
        <PCard image={Company} />
        <PCard image={Crypto} />
        <PCard image={Late} />
        <PCard image={Postr} />
        <PCard image={Venu} />
      </div>
    </div>
  );
};

export default Projects;
