import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const searchImages = async (term) => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
      },
      params: { query: term },
    });
    console.log(response.data.results);
    return response;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error; 
  }
};

export default searchImages;
