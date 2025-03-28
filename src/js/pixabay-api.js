import axios from 'axios';

export const fetchImages = async (searchQuery, page = 1) => {
  const API_KEY = '49580419-995b76e467c7e33d07d0013ac';
  const BASE_URL = 'https://pixabay.com/api/';

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: '49580419-995b76e467c7e33d07d0013ac',
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 9,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};