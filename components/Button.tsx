import { MouseEventHandler } from "react";
import styles from "@styles/Button.module.scss";

interface Props {
  text: string;
  type?: "button" | "reset" | "submit";
  icon?: Object;
  weight?: "fill" | "outline";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: Props) {
  return (
    <button
      className={`${styles.button} ${
        props.weight === "outline" ? styles.outline : styles.fill
      }`}
      onClick={props.onClick}
    >
      {props.icon && <div className={styles.icon}>{props.icon}</div>}

      <span>{props.text}</span>
    </button>
  );
}
