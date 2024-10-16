// _data/users.js
const axios = require('axios');

const jsonPlaceholderApiUrl = 'https://jsonplaceholder.typicode.com';

module.exports = async () => {
  try {
    const response = await axios.get(`${jsonPlaceholderApiUrl}/users`);
    const users = response.data;
    return { users };
  } catch (error) {
    console.error(error);
  }
};