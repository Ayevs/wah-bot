// imageFetcher.js
// this file is required for randomimg to work
const axios = require('axios');

const DANBOORU_API_URL = 'https://danbooru.donmai.us/posts.json';

const fetchRandomImage = async (tag) => {
  try {
    const response = await axios.get(DANBOORU_API_URL, {
      params: {
        tags: tag,
        random: true,
      },
    });

    const data = response.data;
    const randomImage = data[0]; // Assuming the response is an array of images

    return randomImage ? randomImage.file_url : null;
  } catch (error) {
    console.error('Error fetching image:', error);
    return null;
  }
};

module.exports = {
  fetchRandomImage,
};
