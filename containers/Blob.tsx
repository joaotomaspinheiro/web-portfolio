import Image from "next/image";
import styles from "@styles/Blob.module.scss";
import ProfilePicture from "@images/profPic.jpg";

export default function Blob() {
  return (
    <div className={styles.blobsContainer}>
      <div className={styles.blobs}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M37.5,-35.2C54,-20.9,76.6,-10.5,80.5,3.8C84.3,18.1,69.3,36.3,52.8,49.7C36.3,63.1,18.1,71.8,-0.2,72.1C-18.6,72.3,-37.2,64.1,-44.4,50.7C-51.6,37.2,-47.4,18.6,-46.1,1.3C-44.8,-16.1,-46.5,-32.1,-39.3,-46.3C-32.1,-60.6,-16.1,-72.9,-2.8,-70.1C10.5,-67.3,20.9,-49.4,37.5,-35.2Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M51,-64C60.8,-52.6,59.8,-31.5,56.1,-15.4C52.4,0.7,46,11.8,39.6,22.8C33.2,33.8,26.7,44.6,14.6,56C2.4,67.4,-15.4,79.3,-25.9,74.2C-36.4,69.1,-39.6,46.9,-50.3,28.8C-61,10.8,-79.2,-3.2,-76.7,-12.9C-74.2,-22.5,-51,-27.9,-34.8,-38.1C-18.6,-48.4,-9.3,-63.5,5.7,-70.2C20.6,-77,41.2,-75.4,51,-64Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M69.4,-13.6C78.8,6.2,67.4,41.6,45,56.6C22.7,71.6,-10.6,66.1,-35.1,48.3C-59.5,30.6,-75,0.6,-67.7,-16.4C-60.3,-33.5,-30.2,-37.5,-0.1,-37.5C30,-37.5,60.1,-33.4,69.4,-13.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M26,-35.5C33.4,-30.5,38.7,-22.4,49,-11.1C59.3,0.2,74.6,14.7,70.6,21.7C66.6,28.7,43.4,28.2,28.4,32.8C13.4,37.4,6.7,47.2,-2.3,50.4C-11.4,53.6,-22.7,50.3,-38.2,45.8C-53.6,41.3,-73.1,35.7,-75.7,25.2C-78.2,14.7,-63.8,-0.7,-53,-12.1C-42.2,-23.4,-35,-30.8,-26.7,-35.5C-18.5,-40.3,-9.3,-42.3,0,-42.4C9.3,-42.4,18.7,-40.5,26,-35.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M60.8,-51.9C71.3,-35.3,67.1,-10.5,61,13.1C55,36.6,47,58.9,31,67.9C15.1,76.9,-8.9,72.6,-29.3,62.3C-49.7,51.9,-66.5,35.5,-65.8,20.3C-65.1,5.1,-46.9,-8.9,-33,-26.3C-19.1,-43.6,-9.6,-64.4,7.8,-70.7C25.2,-76.9,50.3,-68.5,60.8,-51.9Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M37.5,-28C47.7,-17.1,54.4,-1.6,54.6,18.3C54.7,38.1,48.1,62.2,32,72.1C16,81.9,-9.6,77.5,-27,65.5C-44.3,53.5,-53.4,33.9,-57.3,13.9C-61.1,-6,-59.8,-26.3,-49.4,-37.2C-39,-48.2,-19.5,-49.7,-2.9,-47.4C13.6,-45.1,27.3,-38.8,37.5,-28Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M44.9,-58.3C59.7,-51.1,74.1,-39.9,80.5,-25C86.9,-10.1,85.4,8.6,77.2,22.4C69,36.2,54.2,45.2,40.2,55.7C26.3,66.2,13.1,78.1,-1.3,79.9C-15.8,81.7,-31.6,73.4,-41.8,61.8C-52.1,50.1,-56.9,35.1,-61.1,20.3C-65.2,5.5,-68.8,-9,-66,-22.7C-63.3,-36.5,-54.3,-49.5,-42.3,-57.5C-30.2,-65.5,-15.1,-68.6,0,-68.5C15.1,-68.5,30.2,-65.4,44.9,-58.3Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M41.4,-50.8C55.7,-46.7,70.5,-37.2,79.2,-22.8C87.9,-8.4,90.5,10.9,84.6,27C78.8,43.2,64.5,56.2,49,62.4C33.5,68.7,16.7,68.3,2.6,64.7C-11.6,61.1,-23.1,54.5,-33.6,46.6C-44,38.6,-53.4,29.5,-60.2,17.4C-67.1,5.4,-71.4,-9.6,-69,-24.1C-66.6,-38.6,-57.5,-52.5,-44.8,-57.1C-32.2,-61.7,-16.1,-56.9,-1.2,-55.2C13.6,-53.5,27.2,-54.8,41.4,-50.8Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M44.9,-55.3C51.5,-48,45.4,-27.5,43.9,-11.4C42.4,4.8,45.6,16.5,41.1,23.3C36.6,30.1,24.5,32.1,14.5,32.6C4.5,33,-3.3,31.9,-18.1,33.5C-32.8,35.1,-54.4,39.5,-61.4,32.8C-68.3,26.1,-60.7,8.4,-51.6,-3.1C-42.5,-14.6,-31.8,-19.9,-22.9,-26.7C-14.1,-33.6,-7,-42,6.1,-49.2C19.2,-56.5,38.4,-62.5,44.9,-55.3Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M45,-53.2C55.6,-44.7,59.7,-27.9,59.7,-12.8C59.7,2.4,55.6,16.1,50.4,32.8C45.2,49.6,38.8,69.4,25.8,76.7C12.7,84,-7.1,78.9,-20.6,68.7C-34.1,58.5,-41.4,43.3,-52.1,28.4C-62.9,13.4,-77,-1.4,-76.6,-15.3C-76.3,-29.2,-61.4,-42.2,-46.2,-50C-31,-57.7,-15.5,-60,0.8,-61.1C17.2,-62.1,34.3,-61.7,45,-53.2Z"
          transform="translate(100 100)"
        />
      </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.circle}>
          <Image
            className={styles.profilePicture}
            src={ProfilePicture}
            alt="Image of me"
            placeholder="blur"
            layout="responsive"
            objectFit="cover"
            priority
          />
      </div>
      </div>
    </div>
  );
}
