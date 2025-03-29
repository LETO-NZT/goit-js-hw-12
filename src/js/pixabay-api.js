import axios from 'axios';


  const API_KEY = '49580419-995b76e467c7e33d07d0013ac';
  const BASE_URL = 'https://pixabay.com/api/';

  export async function fetchImages(query, page = 1, perPage = 15) {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          q: query,
          image_type: "photo",
          orientation: "horizontal",
          safesearch: true,
          page,
          per_page: perPage,
        },
      });
  
      return {
        images: response.data.hits,
        total: response.data.totalHits,
      };
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};