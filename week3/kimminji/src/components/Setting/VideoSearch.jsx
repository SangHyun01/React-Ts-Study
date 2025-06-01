import { useEffect } from 'react';
// import styles from '../../pages/Setting.module.css';
import { SearchYoutubeVideos } from '../../api/SearchYoutubeVideos';
import { SearchYoutubeVideosMock}  from '../../api/SearchYoutubeVideosMock';

import styles from './VideoSearch.module.css';

function VideoSearch({ query, setQuery, videos, setVideos, selectedVideo, setSelectedVideo }) {
  const handleQueryChange = (e) => setQuery(e.target.value);
  const handleVideoSelect = (video) => setSelectedVideo(video);

  useEffect(() => {
    const fetchData = async () => {
      const useMock = true;
      const result = useMock
        ? await SearchYoutubeVideosMock()
        : await SearchYoutubeVideos({ query });
      setVideos(result);
    };
    fetchData();
  }, [query]);

  return (
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
  );
}

export default VideoSearch;
