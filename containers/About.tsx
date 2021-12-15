import Image from "next/image";
import Button from "@components/Button";
import { Routes } from "@utils/enums";
import styles from "@styles/About.module.scss";
import { ArrowRight } from "phosphor-react";
import Flutter from "@images/flutter.svg";
import Dart from "@images/dart.svg";
import React from "@images/react.svg";
import Typescript from "@images/typescript.svg";

export default function About() {
  return (
    <section id={Routes.ABOUT}>
      <header className={styles.header}>
        <h1 id={`${Routes.ABOUT}-header`}>About</h1>
        <p>
          I&apos;m an ambitious mobile developer ready to build and design
          digital experiences through mobile technology.
        </p>
      </header>
      <div className={styles.row}>
        <div className={styles.skills}>
          <div className={styles.hard}>
            <h2>Hard skills</h2>
            <ul className={styles.list}>
              <li>Flutter</li>
              <li>Dart</li>
              <li>React Native</li>
              <li>Typescript</li>
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
          <Image src={Flutter} alt="Flutter" />
          <Image src={Dart} alt="Dart" />
          <Image src={React} alt="React Native" />
          <Image src={Typescript} alt="Typescript" />
        </div>
      </div>

      <a className={styles.downloadCV} href="/Resume.pdf" target="_blank">
        <Button
          text="View my resume"
          icon={<ArrowRight />}
          iconPosition="end"
        />
      </a>
    </section>
  );
}
