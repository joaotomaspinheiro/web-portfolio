import Image from "next/image";
import Button from "@components/Button";
import TabBar from "@containers/TabBar";
import { Routes } from "@utils/enums";
import ProfilePicture from "@images/profPic.jpg";
import styles from "@styles/About.module.scss";

export default function About() {
  return (
    <section id={Routes.ABOUT} className={styles.sectionAbout}>
      <div className={styles.header}>
        <h1 id={`${Routes.ABOUT}-header`}>About</h1>
        <p>
          I&apos;m an ambitious frontend developer ready to build and design digital
          experiences through the web.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.row}>
          <div className={styles.description}>
            <div className={styles.image}>
              <Image
                src={ProfilePicture}
                className={styles.profilePicture}
                alt="Image of me"
                height={150}
                width={150}
                quality={100}
                placeholder="blur"
                objectFit="cover"
              />
            </div>
            <div className={styles.info}>
              <div className={styles.titles}>
                <h3>Full Name:</h3>
                <h3>Nationality:</h3>
                <h3>English:</h3>
              </div>
              <div className={styles.values}>
                <span>João Pinheiro</span>
                <span>Portuguese</span>
                <span>Upper Intermediate</span>
              </div>
            </div>
          </div>
          <TabBar />
        </div>
        <a className={styles.downloadCV} href="/Resume.pdf" target="_blank">
          <Button text="Resume" />
        </a>
      </div>
    </section>
  );
}
