import styles from "@styles/ContactItem.module.scss";

export interface Props {
  text: string;
  icon: Object;
  href?: string;
}

export default function ContactItem(props: Props) {
  return (
    <li className={styles.item}>
      <a
        className={styles.link}
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        <i className={styles.icon}>{props.icon}</i>
        <span className={styles.text}>{props.text}</span>
      </a>
    </li>
  );
}
