import Image from "next/image"
import Blob from "@components/Blob";
import { Routes } from "@utils/enums";
import ArrowDown from "@images/arrow-down.svg"
import styles from "@styles/Main.module.scss"

export default function Main() {
  return (
    <section id={Routes[Routes.MAIN]} className={styles.container}>
      <Blob />
      <div className={styles.content}>
        <h1>Hello!</h1>
        <h1>I&apos;m João!</h1>
        <h3>Frontend Developer</h3>

        <div className={styles.animatedArrow}>
          <Image src={ArrowDown} alt="" onClick={() => document.getElementById(Routes[Routes.MAIN + 1])!.scrollIntoView({behavior: "smooth"})} />
        </div>
      </div>
    </section>
  )
}
