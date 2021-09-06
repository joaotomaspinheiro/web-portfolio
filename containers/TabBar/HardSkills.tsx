import ProgressBar from "@components/ProgressBar";
import { useAppSelector } from "@store/hooks";
import styles from "@styles/HardSkills.module.scss";
import { ColorScheme } from "@utils/colorSchemes";

export default function HardSkills() {
  const colorScheme = useAppSelector(
    (state) => state.colorScheme
  ) as ColorScheme;

  return (
    <div className={styles.hardSkills}>
      <h2>Hard Skills</h2>
      <ProgressBar title="React.js" value={70} color={colorScheme.primary} />
      <ProgressBar
        title="Typescript"
        value={60}
        color={colorScheme.primary}
      />
      <ProgressBar title="Sass" value={50} color={colorScheme.primary} />
      <ProgressBar title="Redux" value={20} color={colorScheme.primary} />
    </div>
  );
}
