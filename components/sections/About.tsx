import Image from "next/image"
import ProfilePicture from '@images/profPic.jpg'
import styles from "@styles/About.module.scss"
import { Routes } from "@utils/enums"

export default function About() {
    return (
        <section id={Routes[Routes.ABOUT]}>
          <Image src={ProfilePicture} alt="" objectFit="cover" layout='responsive' height={500} />
          <h1 className={styles.title}>About</h1>
          <div className={styles.row}>
            
          </div>
        </section>
    )
}