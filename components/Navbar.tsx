import { MouseEvent } from "react";
import { setSelectedRoute } from "@redux/actions";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import styles from "@styles/Navbar.module.scss";
import { Routes } from "@utils/enums";

export default function Navbar() {
  const selectedRoute = useAppSelector((state) => state.route) as Routes;
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
            onClick={handleClick}
            style={
              selectedRoute === Routes.ABOUT
                ? { color: "hsl(28, 100%, 60%)" }
                : undefined
            }
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={handleClick}
            style={
              selectedRoute === Routes.PROJECTS
                ? { color: "hsl(28, 100%, 60%)" }
                : undefined
            }
          >
            Projects
          </a>
        </li>
        <li>
          <a
            onClick={handleClick}
            style={
              selectedRoute === Routes.CONTACT
                ? { color: "hsl(28, 100%, 60%)" }
                : undefined
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
