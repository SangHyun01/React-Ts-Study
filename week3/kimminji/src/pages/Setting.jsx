import { useEffect, useState } from 'react';
import { SearchYoutubeVideos } from '../api/searchYoutubeVideos';
import styles from './Setting.module.css';
import { SearchYoutubeVideosMock } from '../api/SearchYoutubeVideosMock';
import { useNavigate } from 'react-router-dom';

function Setting() {
  // 공부 시간, 쉬는 시간, 반복 횟수 설정
  const [studyHour, setStudyHour] = useState(0);
  const [studyMinute, setStudyMinute] = useState(0);
  const [breakHour, setBreakHour] = useState(0);
  const [breakMinute, setBreakMinute] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);

  // 유튜브 동영상 검색어 상태 관리
  const [query, setQuery] = useState('');
  // 검색된 동영상 목록: 검색어(query)에 따라 업데이트됨
  const [videos, setVideos] = useState([]);
  // 선택된 동영상: 검색된 동영상 중 사용자가 선택한 하나의 동영상으로, 버튼 클릭에 따라 업데이트됨
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 페이징
  const navigate = useNavigate();

  // 검색어 변경 핸들러
  const handleQueryChange = (e) => setQuery(e.target.value);
  // 동영상 선택 핸들러
  const handleVideoSelect = (video) => setSelectedVideo(video);
  // 설정 완료 버튼 클릭 핸들러
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

  // 컴포넌트가 마운트되거나 query가 변경될 때마다 유튜브 API를 호출하여 동영상 목록을 가져옴
  useEffect(() => {
    const fetchData = async () => {
      const useMock = true; // 트래픽 문제로 mock data 사용 (검색 테스트 시 false로 설정)
      const result = useMock
        ? await SearchYoutubeVideosMock()
        : await SearchYoutubeVideos({ query });
      setVideos(result);
    };
    fetchData();
  }, [query]);
  

  const hourOptions = Array.from({ length: 12 }, (_, i) => i); // 0~11
  const minuteOptions = [0, 10, 20, 30, 40, 50];
  const isFormValid = (studyHour > 0 || studyMinute > 0) && (breakHour > 0 || breakMinute > 0) && (cycleCount > 0) && selectedVideo !== null; 


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>타이머 설정</h1>
      </div>

      <div className={styles.innercontainer}>
        <div className={styles.settingGroup}>
          <label>공부 시간</label>
          <div className={styles.dropdownGroup}>
            <select value={studyHour} onChange={(e) => setStudyHour(Number(e.target.value))}>
              {hourOptions.map((h) => (
                <option key={h} value={h}>{h}시간</option>
              ))}
            </select>
            <select value={studyMinute} onChange={(e) => setStudyMinute(Number(e.target.value))}>
              {minuteOptions.map((m) => (
                <option key={m} value={m}>{m}분</option>
              ))}
            </select>
          </div>

          <label>쉬는 시간</label>
          <div className={styles.dropdownGroup}>
            <select value={breakHour} onChange={(e) => setBreakHour(Number(e.target.value))}>
              {hourOptions.map((h) => (
                <option key={h} value={h}>{h}시간</option>
              ))}
            </select>
            <select value={breakMinute} onChange={(e) => setBreakMinute(Number(e.target.value))}>
              {minuteOptions.map((m) => (
                <option key={m} value={m}>{m}분</option>
              ))}
            </select>
          </div>

          <label>사이클 반복 횟수</label>
          <div className={styles.dropdownGroup}>
            <input
              type="number"
              value={cycleCount}
              onChange={(e) => setCycleCount(e.target.value)}
            />
         </div>
       </div>

        <div className={styles.videoSection}>
          <div className={styles.videoFrame}>
            <h3>쉬는 시간에 재생할 동영상 검색</h3>
              <input
                type="text"
                value={query}
                onChange={handleQueryChange}
                placeholder="예: 명상 음악, Lo-fi 등"
              />
            {query && videos.length === 0 ? (
              <p>로딩 중 . . .</p>
            ) : (
              <div className={styles.videoList}>
                {videos.map((video, index) => (
                  <button
                    key={index}
                    className={`${styles.videoItem} ${
                      selectedVideo?.videoId === video.videoId ? styles.selected : ''
                    }`}
                    onClick={() => handleVideoSelect(video)}
                  >
                    <img src={video.thumbnailUrl} alt={video.title} />
                    <div>
                      <p className={styles.videoTitle}>{video.title}</p>
                      <p className={styles.videoDesc}>{video.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
          </div>
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
