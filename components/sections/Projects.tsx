import styles from "@styles/Projects.module.scss"
import { Routes } from "@utils/enums"

export default function Projects() {
    return (
        <section id={Routes[Routes.PROJECTS]}>
          <h1 className={styles.title}>Projects</h1>
          
        </section>
    )
}