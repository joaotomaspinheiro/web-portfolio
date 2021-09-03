import { MouseEventHandler } from "react";
import styles from "@styles/Button.module.scss";

interface Props {
  text: string;
  type?: "button" | "reset" | "submit";
  icon?: Object;
  iconPosition?: "start" | "end";
  weight?: "fill" | "outline" | "text";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: Props) {
  return (
    <button
      className={`${styles.button} ${
        props.weight === "outline"
          ? styles.outline
          : props.weight === "text"
          ? styles.text
          : styles.fill
      }`}
      onClick={props.onClick}
    >
      {props.icon && (
        <div
          className={styles.icon}
          style={props.iconPosition === "end" ? { order: 2 } : undefined}
        >
          {props.icon}
        </div>
      )}

      <span>{props.text}</span>
    </button>
  );
}
