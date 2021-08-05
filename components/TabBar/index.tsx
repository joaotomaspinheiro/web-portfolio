import { CSSProperties, MouseEvent, useState } from "react";
import Button from "@components/Button"
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";
import Hobbies from "./Hobbies";
import { AboutItems } from "@utils/enums";
import { useAppSelector } from "@redux/hooks";
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

  const [selectedItem, setSelectedItem] = useState(
    AboutItems[AboutItems.HARD_SKILLS]
  );

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    const item = e.target as HTMLLIElement;
    setSelectedItem(item.id);
  };

  return (
      <div className={styles.container}>
        <ul className={styles.tabBar}>
          <li
            id={AboutItems[AboutItems.HARD_SKILLS]}
            style={
              selectedItem === AboutItems[AboutItems.HARD_SKILLS]
                ? selectedStyle
                : undefined
            }
            onClick={handleClick}
          >
            Hard skills
          </li>
          <li
            id={AboutItems[AboutItems.SOFT_SKILLS]}
            style={
              selectedItem === AboutItems[AboutItems.SOFT_SKILLS]
                ? selectedStyle
                : undefined
            }
            onClick={handleClick}
          >
            Soft skills
          </li>
          <li
            id={AboutItems[AboutItems.HOBBIES]}
            style={
              selectedItem === AboutItems[AboutItems.HOBBIES]
                ? selectedStyle
                : undefined
            }
            onClick={handleClick}
          >
            Hobbies
          </li>
        </ul>
        <div className={styles.itemContainer}>
          {selectedItem === AboutItems[AboutItems.HARD_SKILLS] ? (
            <HardSkills />
          ) : selectedItem === AboutItems[AboutItems.SOFT_SKILLS] ? (
            <SoftSkills />
          ) : (
            <Hobbies />
          )}
        </div>
      
    </div>
  );
}
