import { useEffect } from "react";
import Head from "next/head";
import { setColorScheme, setSelectedRoute } from "@store/actions";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import Navbar from "@containers/Navbar";
import Main from "@containers/Main";
import About from "@containers/About";
import Projects from "@containers/Projects";
import Contact from "@containers/Contact";
import {
  ColorScheme,
  DarkScheme,
  LightScheme,
  LightScheme2,
} from "@utils/colorSchemes";
import { Routes } from "@utils/enums";
import { DESKTOP, isDesktop, TABLET } from "@utils/screenSizes";
import styles from "@styles/Home.module.scss";

export default function Home() {
  const colorScheme = useAppSelector(
    (state) => state.colorScheme
  ) as ColorScheme;
  const dispatch = useAppDispatch();

  const slideshow = () => {
    const viewportWidth = document.documentElement.clientWidth;

    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id.includes(Routes.MAIN)) {
              dispatch(setSelectedRoute(Routes.MAIN));
              dispatch(setColorScheme(LightScheme));
            } else if (entry.target.id.includes(Routes.ABOUT)) {
              dispatch(setSelectedRoute(Routes.ABOUT));
              dispatch(setColorScheme(LightScheme2));
            } else if (entry.target.id.includes(Routes.PROJECTS)) {
              dispatch(setSelectedRoute(Routes.PROJECTS));
              dispatch(setColorScheme(LightScheme));
            } else if (entry.target.id.includes(Routes.CONTACT)) {
              dispatch(setSelectedRoute(Routes.CONTACT));
              dispatch(setColorScheme(LightScheme2));
            }
          }
        });
      },
      {
        threshold: isDesktop(viewportWidth) ? 0.5 : 0.2,
        rootMargin: isDesktop(viewportWidth) ? undefined : "0px 0px -50% 0px",
      }
    );

    document
      .querySelectorAll("section")
      .forEach((section) => observer.observe(section));
  };

  useEffect(() => {
    slideshow();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>João Pinheiro Portfolio</title>
        <meta
          name="description"
          content="Hello, I'm João! I'm an ambitious frontend developer ready to build and design digital experiences through the web."
        />
        <meta property="og:title" content="Hello, I'm João!" />
        <meta
          property="og:description"
          content="I'm an ambitious frontend developer ready to build and design digital experiences through the web."
        />
        <meta property="og:url" content="https://joaopinheiro.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>
        {`
          html {
            scrollbar-color: ${colorScheme.accent} ${colorScheme.background};
          }
          body {
            background: ${colorScheme.background};
            color: ${colorScheme.text};
          }
          * {
            box-shadow: ${colorScheme.text === "white" && "none !important"};
          }
          *::selection {
            background-color: ${colorScheme.accent};
          }
          *::-webkit-scrollbar-track {
            background: ${colorScheme.background};
          }
        `}
      </style>

      <main className={styles.main}>
        <Main />
        <About />
        <Projects />
        <Contact />
      </main>
      <Navbar />
    </div>
  );
}
