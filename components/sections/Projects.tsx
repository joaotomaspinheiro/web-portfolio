import styles from "@styles/Projects.module.scss";
import { Routes } from "@utils/enums";

export default function Projects() {
  return (
    <section id={Routes[Routes.PROJECTS]}>
      <h1 className={styles.title}>Projects</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi aut
        odit delectus quam, mollitia animi repellendus officiis repudiandae rem
        dolores corrupti veritatis fuga quibusdam suscipit iste ducimus alias
        aliquid!
      </p>
    </section>
  );
}
