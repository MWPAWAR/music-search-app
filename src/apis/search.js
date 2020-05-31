import { create } from 'apisauce'

const api = create({
  baseURL: `https://itunes.apple.com`
});

export default query => api.get(`/search?term=${query}`);
