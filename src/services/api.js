import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '39479425-6a3db35f3651c21ffc7f636b4';

export const fetchCardURL = async (query, page, perPage) => {
  return await axios
    .get(`${BASE_URL}`, {
      params: {
        key: `${KEY}`,
        q: `${query}`,
        page: `${page}`,
        per_page: `${perPage}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
};
