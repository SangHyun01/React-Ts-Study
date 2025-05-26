import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; 
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const SearchYoutubeVideos = async ({query}) => {
  const maxResults = 5;

  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults,
        key: API_KEY,
      },
    });

    const filteredVideos = response.data.items
      .filter((video) => video.id.kind === 'youtube#video')
      .map((video) => {
        const { videoId } = video.id;
        const { title, description, thumbnails } = video.snippet;

        // watchUrl: `https://www.youtube.com/watch?v=${videoId}`
        // embedUrl: `https://www.youtube.com/embed/${videoId}`

        return {
          title,
          description,
          thumbnailUrl: thumbnails.medium.url,
          videoId: videoId,
        };
      });

    return filteredVideos;
  } catch (error) {
    console.error('YouTube API 요청 실패:', error);
    return []; 
  }
};


