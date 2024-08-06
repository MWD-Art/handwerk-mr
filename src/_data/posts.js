// _data/blog.js
const axios = require('axios');

const jsonPlaceholderApiUrl = 'https://jsonplaceholder.typicode.com';

module.exports = async () => {
  try {
    const [postsResponse, photosResponse] = await Promise.all([
      axios.get(`${jsonPlaceholderApiUrl}/posts`),
      axios.get(`${jsonPlaceholderApiUrl}/photos`),
    ]);

    const posts = postsResponse.data;
    const photos = photosResponse.data;

    const combinedPosts = posts.map((post, index) => {
      const photo = photos.find((photo) => photo.id === post.id);
      return {
        title: post.title,
        text: post.body,
        image: photo.url,
      };
    });

    return combinedPosts;
  } catch (error) {
    console.error(error);
  }
};