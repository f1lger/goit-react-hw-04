import axios from "axios";

axios.defaults.baseURL = `https://api.unsplash.com/search/photos/`;
const API_KEY = "qPMkJMWpW1utcfkRf6cWtBSWUDpjALPdeMylrJF8hsk";

const options = {
  headers: { Authorization: `Client-ID ${API_KEY}` },
};
export const fetchImages = async (query, page) => {
  const searchParams = new URLSearchParams({
    query,
    page,
    per_page: 12,
  });
  return (await axios(`?${searchParams}`, options)).data;
};