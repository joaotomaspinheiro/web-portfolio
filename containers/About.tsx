import Image from "next/image";
import Button from "@components/Button";
import { Routes } from "@utils/enums";
import styles from "@styles/About.module.scss";
import { ArrowRight } from "phosphor-react";
import React from "@images/react.svg";
import Typescript from "@images/typescript.svg";
import Sass from "@images/sass.svg";
import Redux from "@images/redux.svg";

export default function About() {
  return (
    <section id={Routes.ABOUT}>
      <div className={styles.header}>
        <h1 id={`${Routes.ABOUT}-header`}>About</h1>
        <p>
          I&apos;m an ambitious frontend developer ready to build and design
          digital experiences through the web.
        </p>
      </div>
      <div className={styles.row}>
        <div className={styles.skills}>
          <div className={styles.hard}>
            <h2>Hard skills</h2>
            <ul className={styles.list}>
              <li>React.js</li>
              <li>Typescript</li>
              <li>Sass</li>
              <li>Redux</li>
            </ul>
          </div>
          <div className={styles.soft}>
            <h2>Soft skills</h2>
            <ul className={styles.list}>
              <li>Team player</li>
              <li>Adaptable</li>
              <li>Resilient</li>
              <li>Communicative</li>
            </ul>
          </div>
        </div>
        <div className={styles.logos}>
          <Image src={React} alt="React.js" />
          <Image src={Sass} alt="Sass" />
          <Image src={Typescript} alt="Typescript" />
          <Image src={Redux} alt="Redux" />
        </div>
      </div>

      <a className={styles.downloadCV} href="/Resume.pdf" target="_blank">
        <Button
          text="View my resume"
          icon={<ArrowRight />}
          iconPosition="end"
        />
      </a>

      {/*<div className={styles.card}>
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
          <Button text="View my resume" icon={<ArrowRight />} iconPosition="end" />
        </a>
  </div>*/}
    </section>
  );
}
