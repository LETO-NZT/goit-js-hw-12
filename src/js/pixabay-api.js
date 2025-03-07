import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '49097244-8862dd375f26540a0b3f58369',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

export async function getImages(searchName, page, perPage) {
  const response = await instance.get('/', {
    params: { q: searchName, page: page, per_page: perPage },
  });
  return response.data;
}
