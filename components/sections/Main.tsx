import Image from "next/image"
import Blob from "@components/Blob";
import { Routes } from "@utils/enums";
import ArrowDown from "@images/arrow-down.svg"
import styles from "@styles/Main.module.scss"

export default function Main() {
  return (
    <section id={Routes[Routes.MAIN]}>
      <Blob />
      <div className={styles.content}>
        <h1>Hello!</h1>
        <h1>I&apos;m João!</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus autem minima sequi aperiam, voluptates nam consectetur maiores repellat provident non? Veniam autem dolorem eligendi asperiores vitae quidem sint, laborum sit?</p>

        <div className={styles.animatedArrow}>
          <Image src={ArrowDown} alt="" onClick={() => document.getElementById(Routes[Routes.MAIN + 1])!.scrollIntoView({behavior: "smooth"})} />
        </div>
      </div>
    </section>
  )
}
