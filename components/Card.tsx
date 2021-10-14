import Button from "./Button";
import { GithubLogo, Globe } from "phosphor-react";
import styles from "@styles/Card.module.scss";
import Tag, { Props as TagType } from "./Tag";
import Image from "next/image";

type UsedTechnologies = {
  name: string;
  image: StaticImageData;
};

interface Props {
  image: StaticImageData;
  title: string;
  description: string;
  tags?: TagType[];
  usedTechnologies?: UsedTechnologies[];
  demo?: string;
  sourceCode: string;
}

export default function Card(props: Props) {
  const handleClick = (url: string) => window.open(url, "_blank");

  return (
    <div className={styles.card} onClick={props.demo ? () => handleClick(props.demo!) : undefined}>
      <div
        className={styles.image}
      >
        <Image
          src={props.image}
          alt="Project image"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{props.title}</h2>
        {props.tags && (
          <div className={styles.tags}>
            {props.tags.map((tag, idx) => (
              <Tag key={idx} title={tag.title} icon={tag.icon} />
            ))}
          </div>
        )}
        <p className={styles.description}>{props.description}</p>
        {props.usedTechnologies && (
          <div className={styles.technologies}>
            {props.usedTechnologies.map((usedTechnology, idx) => (
              <span
                key={idx}
                title={usedTechnology.name}
                className={styles.usedTechnology}
              >
                <Image
                  src={usedTechnology.image}
                  alt="Technology image"
                  height={32}
                  width={32}
                />
              </span>
            ))}
          </div>
        )}
      </div>
      <div className={styles.viewMore}>
        {props.demo && (
          <Button
            icon={<Globe />}
            text="Demo"
            weight="fill"
            onClick={() => handleClick(props.demo!)}
          />
        )}

        <Button
          icon={<GithubLogo />}
          text="Source code"
          weight="text"
          onClick={() => handleClick(props.sourceCode)}
        />
      </div>
    </div>
  );
}
