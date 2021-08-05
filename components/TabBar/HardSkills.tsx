import ProgressBar from "@components/ProgressBar";
import { useAppSelector } from "@redux/hooks";
import styles from "@styles/HardSkills.module.scss";
import { ColorScheme } from "@utils/colorSchemes";

export default function HardSkills() {
  const colorScheme = useAppSelector(
    (state) => state.colorScheme
  ) as ColorScheme;

  return (
    <div className={styles.hardSkills}>
      <h2>Hard Skills</h2>
      <ProgressBar title="React.js" value={60} color={colorScheme.primary} />
      <ProgressBar
        title="React Native"
        value={40}
        color={colorScheme.primary}
      />
      <ProgressBar title="Next.js" value={30} color={colorScheme.primary} />
      <ProgressBar title="Redux" value={10} color={colorScheme.primary} />
    </div>
  );
}
