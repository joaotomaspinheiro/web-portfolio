import Card from "@components/Card";
import { Props as TagType } from "@components/Tag";
import { Routes } from "@utils/enums";
import ReactNative from "@images/react.svg";
import Express from "@images/expressjs.svg";
import PostgreSQL from "@images/postgresql.svg";
import RandomImage from "@images/unsplash.jpg";
import EcoMap from "@images/ecomap.jpg";
import styles from "@styles/Projects.module.scss";

export type UsedTechnologies = {
  name: string,
  image: StaticImageData
}

const tags: TagType[] = [
  {
    title: "Maps",
  },
  {
    title: "Recycling",
  },
];

const usedTechnologies: UsedTechnologies[] = [
  {
    name: "React Native",
    image: ReactNative,
  },
  {
    name: "Express.js",
    image: Express,
  },
  {
    name: "PostgreSQL",
    image: PostgreSQL,
  },
];

export default function Projects() {
  return (
    <section id={Routes[Routes.PROJECTS]}>
      <h1 className={styles.header} id={`${Routes[Routes.PROJECTS]}-header`}>Projects</h1>
      <div className={styles.projects}>
        <Card
          image={EcoMap}
          title="EcoMap"
          description="EcoMap is a project aiming to reduce urban waste by providing the location of the recycle bins to people."
          tags={tags}
          usedTechnologies={usedTechnologies}
          sourceCode="https://github.com/joaotomaspinheiro/EcoMap"
        />
        <Card
          image={RandomImage}
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi aut
          odit delectus quam."
          sourceCode="https://github.com/joaotomaspinheiro"
        />
        <Card
          image={RandomImage}
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi aut
          odit delectus quam."
          sourceCode="https://github.com/joaotomaspinheiro"
        />
      </div>
    </section>
  );
}
