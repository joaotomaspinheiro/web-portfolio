import { MouseEvent, useState } from "react";
import { setSelectedRoute } from "@store/actions";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Routes } from "@utils/enums";
import { ColorScheme } from "@utils/colorSchemes";
import { ArrowUp } from "phosphor-react";
import styles from "@styles/Navbar.module.scss";
const animations = {
  navbar: { transform: "translate(0)"},
  icon: { transform: "" },
  svg: {
    startPosition: {
      transform: "rotate(0deg)",
    },
    endPosition: { transform: "rotate(180deg)" }
  }
};

export default function Navbar() {
  const selectedRoute = useAppSelector((state) => state.route);
  const colorScheme = useAppSelector(
    (state) => state.colorScheme
  ) as ColorScheme;
  const dispatch = useAppDispatch();

  const [showMenu, setShowMenu] = useState(false);

  

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const route = e.target as HTMLAnchorElement;
    document
      .getElementById(route.text.toUpperCase())!
      .scrollIntoView({ behavior: "smooth" });

    switch (route.text.toUpperCase()) {
      case Routes[Routes.ABOUT]:
        dispatch(setSelectedRoute(Routes.ABOUT));
        break;
      case Routes[Routes.PROJECTS]:
        dispatch(setSelectedRoute(Routes.PROJECTS));
        break;
      case Routes[Routes.CONTACT]:
        dispatch(setSelectedRoute(Routes.CONTACT));
        break;
      default:
        break;
    }
  };

  return (
    <nav
      className={styles.navbar}
      style={showMenu ? animations.navbar : undefined}
      onClick={() => setShowMenu(!showMenu)}
    >
      <i
        className={styles.navIcon}
        style={showMenu ? animations.icon : undefined}
      >
        <ArrowUp
          size={32}
          style={
            showMenu ? animations.svg.endPosition : animations.svg.startPosition
          }
        />
      </i>
      <ul>
        <li>
          <a
            style={
              selectedRoute === Routes.ABOUT
                ? { color: colorScheme.primary }
                : undefined
            }
            onClick={handleClick}
          >
            About
          </a>
        </li>
        <li>
          <a
            style={
              selectedRoute === Routes.PROJECTS
                ? { color: colorScheme.primary }
                : undefined
            }
            onClick={handleClick}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            style={
              selectedRoute === Routes.CONTACT
                ? { color: colorScheme.primary }
                : undefined
            }
            onClick={handleClick}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
