import ProgressBar from "@components/ProgressBar";
import { useAppSelector } from "@redux/hooks";
import styles from "@styles/SoftSkills.module.scss";
import { ColorScheme } from "@utils/colorSchemes";

export default function SoftSkills() {
  const colorScheme = useAppSelector(
    (state) => state.colorScheme
  ) as ColorScheme;

  return (
    <div className={styles.softSkills}>
      <h2>Soft Skills</h2>
      <ProgressBar title="Resilience" value={80} color={colorScheme.primary} />
      <ProgressBar
        title="Adaptable"
        value={60}
        color={colorScheme.primary}
      />
    </div>
  );
}