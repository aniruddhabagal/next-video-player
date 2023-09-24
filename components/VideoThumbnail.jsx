import React from "react";
import Link from "next/link";
import styles from "../styles/VideoThumbnail.module.css";

const VideoThumbnail = () => {
  return (
    <div className={styles.thumbnail}>
      <Link href="/player">
        <div className={styles.overlay}>
          <img
            src="/videoThumb.png"
            alt="Video Thumbnail"
            className={styles.image}
          />
          <p className={styles.text}>Play Video</p>
        </div>
      </Link>
    </div>
  );
};

export default VideoThumbnail;
