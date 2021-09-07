import Image from "next/image";
import { useRouter } from "next/router";
import NotFound from "@images/404.svg";
import styles from "@styles/404.module.scss";
import Button from "@components/Button";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.push("/404");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={NotFound} alt="Page not found" layout="responsive" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.description}>
          Page {router.basePath} not found.
        </h1>
        <br />
        <Button text="HOMEPAGE" onClick={() => router.push("/")} />
      </div>
    </div>
  );
}
