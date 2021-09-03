import styles from "@styles/Tag.module.scss";

export interface Props {
  title: string;
  icon?: Object;
}

export default function Tag(props: Props) {
  return (
    <span className={styles.tag}>
      {props.title}
      {props.icon && <i className={styles.icon}>{props.icon}</i>}
    </span>
  );
}
