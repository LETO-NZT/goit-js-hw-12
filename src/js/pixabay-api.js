import axios from 'axios';

const API_KEY = '49580419-995b76e467c7e33d07d0013ac';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 15) {
  try {
    console.log(`Fetching images: query=${query}, page=${page}, perPage=${perPage}`);

    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: perPage,
      },
    });

    if (!response.data || !response.data.hits) {
      throw new Error('Invalid API response');
    }

    console.log(`Fetched ${response.data.hits.length} images.`);

    return {
      images: response.data.hits,
      total: response.data.totalHits,
    };

  } catch (error) {
    console.error('Error fetching images:', error.message);
    throw error;
  }
}
