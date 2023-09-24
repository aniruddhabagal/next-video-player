import React from "react";
import Link from "next/link";
import styles from "../styles/HomePage.module.css"; // Create a corresponding CSS module for styling

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailWrapper}>
        <Link href="/video-player">
          <a className={styles.thumbnailLink}>
            <img
              src="/videoThumb.png"
              alt="Video Thumbnail"
              className={styles.thumbnail}
            />
            <div className={styles.overlay}>
              <p className={styles.title}>Play Video</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
