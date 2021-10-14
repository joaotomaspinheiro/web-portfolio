import Card from "@components/Card";
import { Routes } from "@utils/enums";
import EcoMap from "@images/ecomap.jpg";
import Portfolio from "@images/cover.jpg";
import projects from "projects";
import styles from "@styles/Projects.module.scss";

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
          tags={projects.ecomap.tags}
          usedTechnologies={projects.ecomap.usedTechnologies}
          sourceCode="https://github.com/joaotomaspinheiro/EcoMap"
        />
        <Card
          image={Portfolio}
          title="Portfolio"
          description="Web based portfolio for knowing more about me! 😀"
          tags={projects.portfolio.tags}
          usedTechnologies={projects.portfolio.usedTechnologies}
          sourceCode="https://github.com/joaotomaspinheiro/web-portfolio"
        />
      </div>
    </section>
  );
}
