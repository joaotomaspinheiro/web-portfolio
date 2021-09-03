import { useState } from "react";
import { EnvelopeSimple } from "phosphor-react";
import Button from "@components/Button";
import styles from "@styles/Contact.module.scss";
import { Routes } from "@utils/enums";

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
    <section id={Routes[Routes.CONTACT]} className={styles.sectionContact}>
      <div className={styles.content}>
        <h1 className={styles.title} id={`${Routes[Routes.CONTACT]}-header`}>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab non
          suscipit eum, voluptates vel vitae soluta qui, perferendis, nihil
          illum! Sed, architecto! At, ex id! Et rerum corrupti libero! Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          veritatis molestiae inventore placeat libero corporis quam minus ullam
          quis dicta quae recusandae expedita nostrum odio ex maxime, soluta
          voluptas saepe.
        </p>
      </div>

      <div className={styles.overlay}>
        <Button
          icon={<EnvelopeSimple />}
          weight="outline"
          text={EMAIL}
          onClick={handleClick}
        />
        <div
          className={`${styles.overlayText} ${showAnimation && styles.show}`}
        >
          Copied to clipboard!
        </div>
      </div>
    </section>
  );
}
