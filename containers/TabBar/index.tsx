import { CSSProperties, MouseEvent, useState } from "react";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";
import { AboutItems } from "@utils/enums";
import { useAppSelector } from "@store/hooks";
import { ColorScheme } from "@utils/colorSchemes";
import styles from "@styles/TabBar.module.scss";

export default function TabBar() {
  const colorScheme = useAppSelector(
    (state) => state.colorScheme
  ) as ColorScheme;

  const selectedStyle: CSSProperties = {
    color: colorScheme.primary,
    borderBottom: `3px solid ${colorScheme.primary}`,
  };

  const [selectedItem, setSelectedItem] = useState(AboutItems.HARD_SKILLS);

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    const item = e.target as HTMLLIElement;
    setSelectedItem(
      item.id === AboutItems.HARD_SKILLS
        ? AboutItems.HARD_SKILLS
        : AboutItems.SOFT_SKILLS
    );
  };

  return (
    <div className={styles.container}>
      <ul className={styles.tabBar}>
        <li
          id={AboutItems.HARD_SKILLS}
          style={
            selectedItem === AboutItems.HARD_SKILLS ? selectedStyle : undefined
          }
          onClick={handleClick}
        >
          Hard skills
        </li>
        <li
          id={AboutItems.SOFT_SKILLS}
          style={
            selectedItem === AboutItems.SOFT_SKILLS ? selectedStyle : undefined
          }
          onClick={handleClick}
        >
          Soft skills
        </li>
      </ul>
      <div className={styles.itemContainer}>
        {selectedItem === AboutItems.HARD_SKILLS ? (
          <HardSkills />
        ) : selectedItem === AboutItems.SOFT_SKILLS ? (
          <SoftSkills />
        ) : undefined}
      </div>
    </div>
  );
}
