import Image from "next/image";
import { useState } from "react";
import { EnvelopeSimple, GithubLogo, LinkedinLogo, Phone } from "phosphor-react";
import Button from "@components/Button";
import styles from "@styles/Contact.module.scss";
import ContactList  from "./ContactList";
import { Routes } from "@utils/enums";
import Meeting from "@images/meeting.svg";
import ContactItem from "@components/ContactItem";

const EMAIL = "joaotomasp@gmail.com";
const ANIMATION_DURATION = 2000;

export default function Contact() {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleClick = () => {
    if (showAnimation) return;

    navigator.clipboard.writeText(EMAIL);
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), ANIMATION_DURATION * 2);
  };

  return (
    <section id={Routes.CONTACT} className={styles.container}>
      <h1 className={styles.header} id={`${Routes.CONTACT}-header`}>
        Let&apos;s talk
      </h1>
      <div className={styles.row}>
        <div className={styles.contacts}>
        <ContactList>
          <ContactItem text={EMAIL} href="mailto:joaotomasp@gmail.com" icon={<EnvelopeSimple />}  />
          <ContactItem text="/joaotomaspinheiro" href="https://linkedin.com/in/joaotomaspinheiro" icon={<LinkedinLogo />} />
          <ContactItem  text="/joaotomaspinheiro" href="https://github.com/joaotomaspinheiro" icon={<GithubLogo />}/>
        </ContactList>
          {/* <div className={styles.overlay}>
            <Button
              icon={<EnvelopeSimple />}
              weight="outline"
              text={EMAIL}
              onClick={handleClick}
            />
            <div
              className={`${styles.overlayText} ${
                showAnimation && styles.show
              }`}
            >
              Copied to clipboard!
            </div>
          </div> */}
        </div>
        <div className={styles.image}>
          <Image src={Meeting} alt="Team meeting" layout="fill" />
        </div>
      </div>
      <footer className={styles.footer}>&copy; {new Date().getFullYear()} João Pinheiro. All rights reserved.</footer>
    </section>
  );
}
