import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Setting.module.css';
import TimeSettingGroup from '../components/Setting/TimeSettingGroup';
import VideoSearch from '../components/Setting/VideoSearch';

function Setting() {
  const [studyHour, setStudyHour] = useState(0);
  const [studyMinute, setStudyMinute] = useState(0);
  const [breakHour, setBreakHour] = useState(0);
  const [breakMinute, setBreakMinute] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);

  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const navigate = useNavigate();

  const isFormValid =
    (studyHour > 0 || studyMinute > 0) &&
    (breakHour > 0 || breakMinute > 0) &&
    cycleCount > 0 &&
    selectedVideo !== null;

  const handleSubmit = () => {
    const totalStudyMinutes = studyHour * 60 + studyMinute;
    const totalBreakMinutes = breakHour * 60 + breakMinute;

    const params = new URLSearchParams({
      study: totalStudyMinutes,
      break: totalBreakMinutes,
      cycle: cycleCount,
      video: selectedVideo ? selectedVideo.videoId : '',
    });
    navigate(`/timer?${params.toString()}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>타이머 설정</h1>
      </div>

      <div className={styles.innercontainer}>
        <TimeSettingGroup
          studyHour={studyHour}
          studyMinute={studyMinute}
          breakHour={breakHour}
          breakMinute={breakMinute}
          cycleCount={cycleCount}
          setStudyHour={setStudyHour}
          setStudyMinute={setStudyMinute}
          setBreakHour={setBreakHour}
          setBreakMinute={setBreakMinute}
          setCycleCount={setCycleCount}
        />

        <VideoSearch
          query={query}
          setQuery={setQuery}
          videos={videos}
          setVideos={setVideos}
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
        />
      </div>

      <div className={styles.buttonWrapper}>
        <button
          className={styles.confirmButton}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          설정 완료
        </button>
      </div>
    </div>
  );
}

export default Setting;
