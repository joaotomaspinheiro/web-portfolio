import styles from "@styles/ProgressBar.module.scss";

interface Props {
  title: string;
  value: number;
  color: string;
  isVisible?: boolean;
}

export default function ProgressBar(props: Props) {
  if (props.value <= 0 || props.value > 100)
    throw new RangeError("Value must be between 1% and 100%");

  return (
    <div>
      <div className={styles.header}>
        <h4 className={styles.title}>{props.title}</h4>
        <span className={styles.value}>{props.value}%</span>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.background}></div>
        <div
          className={styles.foreground}
          style={{
            backgroundColor: props.color,
            width: `${props.isVisible === false ? 0 : props.value}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
