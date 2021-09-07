import Card from "@components/Card";
import { Props as TagType } from "@components/Tag";
import { Routes } from "@utils/enums";
import React from "@images/react.svg";
import Express from "@images/expressjs.svg";
import TypeScript from "@images/typescript.svg";
import PostgreSQL from "@images/postgresql.svg";
import RandomImage from "@images/unsplash.jpg";
import EcoMap from "@images/ecomap.jpg";
import styles from "@styles/Projects.module.scss";

export type UsedTechnologies = {
  name: string;
  image: StaticImageData;
};

const tags = {
  ecomap: [
    {
      title: "Maps",
    },
    {
      title: "Recycling",
    },
  ],
  realEstateCRM: [
    {
      title: "CRM",
    },
    {
      title: "Maps",
    },
    {
      title: "Real Estate",
    },
  ],
};

const usedTechnologies = {
  ecomap: [
    {
      name: "React Native",
      image: React,
    },
    {
      name: "Express.js",
      image: Express,
    },
    {
      name: "PostgreSQL",
      image: PostgreSQL,
    },
  ],
  realEstateCRM: [
    {
      name: "React.js",
      image: React,
    },
    {
      name: "Express.js",
      image: Express,
    },
    {
      name: "PostgreSQL",
      image: PostgreSQL,
    },
  ],
};

export default function Projects() {
  return (
    <section id={Routes.PROJECTS}>
      <h1 className={styles.header} id={`${Routes.PROJECTS}-header`}>
        Projects
      </h1>
      <div className={styles.projects}>
        <Card
          image={EcoMap}
          title="EcoMap"
          description="EcoMap is a mobile app aiming to reduce urban waste by providing the location of the recycle bins to people."
          tags={tags.ecomap}
          usedTechnologies={usedTechnologies.ecomap}
          demo="https://github.com/joaotomaspinheiro/EcoMap"
          sourceCode="https://github.com/joaotomaspinheiro/EcoMap"
        />
        <Card
          image={RandomImage}
          title="Real Estate CRM"
          description="Personal CRM in the web for a real estate agent to manage properties and leads."
          tags={tags.realEstateCRM}
          usedTechnologies={usedTechnologies.realEstateCRM}
          sourceCode="https://github.com/joaotomaspinheiro/jaimobiliaria"
        />
      </div>
    </section>
  );
}
