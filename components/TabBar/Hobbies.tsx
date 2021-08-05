import ProgressBar from "@components/ProgressBar";
import { useAppSelector } from "@redux/hooks";
import styles from "@styles/Hobbies.module.scss";
import { ColorScheme } from "@utils/colorSchemes";

export default function SoftSkills() {
  const colorScheme = useAppSelector(
    (state) => state.colorScheme
  ) as ColorScheme;

  return (
    <div className={styles.hobbies}>
      <h2>Hobbies</h2>
      <ProgressBar title="Photography" value={70} color={colorScheme.primary} />
      <ProgressBar
        title="Hiking"
        value={60}
        color={colorScheme.primary}
      />
    </div>
  );
}