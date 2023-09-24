import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/VideoPlayer.module.css";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [progress, setProgress] = useState(0);

  const handleProgress = (event) => {
    const video = videoRef.current;
    const newTime = (event.target.value / 100) * video.duration;
    video.currentTime = newTime;
  };

  useEffect(() => {
    const video = videoRef.current;
    const updateProgress = () =>
      setProgress((video.currentTime / video.duration) * 100);
    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, []);

  const playPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!isPlaying);
  };

  const changeVolume = (event) => {
    const video = videoRef.current;
    video.volume = event.target.value;
    setVolume(event.target.value);
  };

  const changeRate = (rate) => {
    const video = videoRef.current;
    video.playbackRate = rate;
    setPlaybackRate(rate);
  };

  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  };

  return (
    <div className={styles.videoContainer} ref={containerRef}>
      <video ref={videoRef} className={styles.video}>
        <source
          src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className={styles.videoControls}>
        <button className={styles.controlButton} onClick={playPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <div className={styles.volumeControl}>
          <label className={styles.controlLabel}>Volume</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={changeVolume}
          />
        </div>
        <div className={styles.progressBar}>
          <label className={styles.controlLabel}>Seek</label>
          <input
            className={styles.seekbar}
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgress}
          />
        </div>
        <div className={styles.speedControl}>
          <button onClick={() => changeRate(0.5)}>0.5x</button>
          <button onClick={() => changeRate(1)}>1x</button>
          <button onClick={() => changeRate(1.5)}>1.5x</button>
          <button onClick={() => changeRate(2)}>2x</button>
        </div>
        <button className={styles.controlButton} onClick={toggleFullScreen}>
          Fullscreen
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
