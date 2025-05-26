import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './Timer.module.css';

export default function Timer() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const study = parseInt(searchParams.get('study'), 10);
  const rest = parseInt(searchParams.get('break'), 10);
  const cycle = parseInt(searchParams.get('cycle'), 10);
  const videoId = searchParams.get('video');

  const [timeLeft, setTimeLeft] = useState(study * 60);
  const [isStudyTime, setIsStudyTime] = useState(true);
  const [currentCycle, setCurrentCycle] = useState(1);
  const intervalRef = useRef(null);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) return prev - 1;

        if (isStudyTime) {
          setIsStudyTime(false);
          return rest * 60;
        } else {
          if (currentCycle >= cycle) {
            clearInterval(intervalRef.current);
            return 0;
          } else {
            setCurrentCycle((c) => c + 1);
            setIsStudyTime(true);
            return study * 60;
          }
        }
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []); 

  // 종료 후 settings로 이동
  useEffect(() => {
    if (timeLeft === 0 && currentCycle === cycle && !isStudyTime) {
      clearInterval(intervalRef.current);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  }, [timeLeft, currentCycle, isStudyTime, navigate]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>타이머</h1>

      <div className={`${styles.timer} ${isStudyTime ? styles.study : styles.rest}`}>
        {formatTime(timeLeft)}
      </div>

      {!isStudyTime && (
        <div className={styles.youtubeWrapper}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
