import axios from 'axios'

const myAccessKey = 'l1jrEcQi9zAbLOtMDCSDuYecyRjPMdKi6gOD3yY5KZs'

const apiImages = async (searchItems, page) => {
  const res = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${myAccessKey}`,
    },
    params: {
      query: searchItems,
      page: page,
      per_page: 8,
    },
  });
  return res.data;
};

export default apiImages;