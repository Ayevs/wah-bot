// imageFetcher.js
// this file is required for randomimg to work
const axios = require("axios");
const parseString = require("xml2js").parseString;

const DANBOORU_API_URL = "https://danbooru.donmai.us/posts.json";

// const fetchRandomImage = async (tag) => {
//   try {
//     const response = await axios.get(DANBOORU_API_URL, {
//       params: {
//         tags: tag,
//         random: true,
//       },
//     });

//     const data = response.data;
//     const randomImage = data[0]; // Assuming the response is an array of images

//     return randomImage ? randomImage.file_url : null;
//   } catch (error) {
//     console.error("Error fetching image:", error);
//     return null;
//   }
// };

const SAFEBORU_API_URL =
  "https://safebooru.org/index.php?page=dapi&s=post&q=index&tags=";

const fetchRandomImage = async (tag) => {
  try {
    const response = await axios.get(
      `${SAFEBORU_API_URL}${encodeURIComponent(tag)}`,
      {
        params: {
          tags: tag,
          random: true,
        },
      }
    );

    const xmlData = response.data;

    let jsonData;
    parseString(xmlData, (err, result) => {
      if (err) {
        throw err;
      }
      jsonData = result;
    });

    const posts = jsonData.posts.post;
    shuffle(posts);
    const randomImage = posts[0];

    return randomImage ? randomImage.$.file_url : null;
  } catch (error) {
    console.error("error fetching iamge ", error);
    return null;
  }
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

module.exports = {
  fetchRandomImage,
};
