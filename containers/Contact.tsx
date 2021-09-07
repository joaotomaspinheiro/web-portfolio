import Image from "next/image";
import ContactList from "./ContactList";
import ContactItem from "@components/ContactItem";
import { Routes } from "@utils/enums";
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";
import Meeting from "@images/meeting.svg";
import styles from "@styles/Contact.module.scss";

const EMAIL = "joaotomasp@gmail.com";

export default function Contact() {
  return (
    <section id={Routes.CONTACT} className={styles.container}>
      <h1 className={styles.header} id={`${Routes.CONTACT}-header`}>
        Let&apos;s talk
      </h1>
      <div className={styles.row}>
        <div className={styles.contacts}>
          <ContactList>
            <ContactItem
              text={EMAIL}
              href="mailto:joaotomasp@gmail.com"
              icon={<EnvelopeSimple />}
            />
            <ContactItem
              text="/joaotomaspinheiro"
              href="https://linkedin.com/in/joaotomaspinheiro"
              icon={<LinkedinLogo />}
            />
            <ContactItem
              text="/joaotomaspinheiro"
              href="https://github.com/joaotomaspinheiro"
              icon={<GithubLogo />}
            />
          </ContactList>
        </div>
        <div className={styles.image}>
          <Image src={Meeting} alt="Team meeting" layout="fill" loading="lazy" />
        </div>
      </div>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} João Pinheiro. All rights reserved.
      </footer>
    </section>
  );
}
