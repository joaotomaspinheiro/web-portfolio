import { MouseEvent, useEffect } from "react";
import { setSelectedRoute } from "@redux/actions";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { Routes } from "@utils/enums";
import styles from "@styles/Navbar.module.scss";
import { ColorScheme } from "@utils/colorSchemes";

export default function Navbar() {
  const selectedRoute = useAppSelector((state) => state.route);
  const colorScheme = useAppSelector(state => state.colorScheme) as ColorScheme;
  const dispatch = useAppDispatch();

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
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a
            id={`${Routes[Routes.ABOUT]}-item`}
            style={selectedRoute === Routes.ABOUT ? {color: colorScheme.primary} : undefined}
            onClick={handleClick}
          >
            About
          </a>
        </li>
        <li>
          <a
            id={`${Routes[Routes.PROJECTS]}-item`}
            style={selectedRoute === Routes.PROJECTS ? {color: colorScheme.primary} : undefined}
            onClick={handleClick}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            id={`${Routes[Routes.CONTACT]}-item`}
            style={selectedRoute === Routes.CONTACT ? {color: colorScheme.primary} : undefined}
            onClick={handleClick}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
