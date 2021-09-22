import ProgressBar from "@components/ProgressBar";
import { useAppSelector } from "@store/hooks";
import styles from "@styles/SoftSkills.module.scss";
import { ColorScheme } from "@utils/colorSchemes";

export default function SoftSkills() {
  const colorScheme = useAppSelector(
    (state) => state.colorScheme
  ) as ColorScheme;

  return (
    <div className={styles.softSkills}>
      <h2>Soft Skills</h2>
      <ProgressBar
        title="Team player"
        value={90}
        color={colorScheme.primary}
      />
      <ProgressBar
        title="Adaptable"
        value={80}
        color={colorScheme.primary}
      />
      <ProgressBar title="Resilient" value={60} color={colorScheme.primary} />
      
      
      <ProgressBar
        title="Communicative"
        value={50}
        color={colorScheme.primary}
      />
      
      
      
    </div>
  );
}