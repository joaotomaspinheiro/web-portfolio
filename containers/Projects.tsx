import Card from "@components/Card";
import { Routes } from "@utils/enums";
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
