import axios from 'axios';

const fetchImg = async (searchQuery, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '29562775-0cedab5e27dd705c115fa7ca4';

  const response = await axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data.hits;
};

export default fetchImg;
