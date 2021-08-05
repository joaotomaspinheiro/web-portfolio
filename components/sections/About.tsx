import { useEffect } from "react";
import Image from "next/image";
import Button from "@components/Button";
import TabBar from "@components/TabBar";
import { Routes } from "@utils/enums";
import ProfilePicture from "@images/profPic.jpg";
import styles from "@styles/About.module.scss";

const getAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
    age--;

  return age;
};

export default function About() {
  useEffect(() => {}, []);

  return (
    <section id={Routes[Routes.ABOUT]} className={styles.sectionAbout}>
      <div className={styles.header}>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, modi
          eaque! Nemo quam labore voluptate, quibusdam, dolores fugit explicabo
          non, nulla fuga necessitatibus totam eius! Dolorem error recusandae
          laudantium magni.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.row}>
          <div className={styles.description}>
            <div className={styles.image}>
              <Image
                src={ProfilePicture}
                className={styles.profilePicture}
                alt=""
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
                <h3>Age:</h3>
                <h3>Nationality:</h3>
                <h3>English:</h3>
              </div>
              <div className={styles.values}>
                <span>João Pinheiro</span>
                <span>{getAge(new Date("2002/10/24"))}</span>
                <span>Portuguese</span>
                <span>Upper Intermediate</span>
              </div>
            </div>
          </div>
          <TabBar />
        </div>
        <a className={styles.downloadCV} href="/Curriculum.pdf" target="_blank">
          <Button text="Download CV" />
        </a>
      </div>
    </section>
  );
}
