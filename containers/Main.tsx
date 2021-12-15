import Image from "next/image"
import Blob from "@containers/Blob";
import { Routes } from "@utils/enums";
import ArrowDown from "@images/arrow-down.svg"
import styles from "@styles/Main.module.scss"

export default function Main() {
  return (
    <section id={Routes.MAIN} className={styles.container}>
      <Blob />
      <div className={styles.content}>
        <h1 id={`${Routes.MAIN}-header`}>Hello!</h1>
        <h1 id={`${Routes.MAIN}-header`}>I&apos;m João!</h1>
        <h3>Mobile Developer</h3>

        <div className={styles.animatedArrow}>
          <Image src={ArrowDown} alt="Arrow down" onClick={() => document.getElementById(Routes.ABOUT)!.scrollIntoView({behavior: "smooth"})} />
        </div>
      </div>
    </section>
  )
}
