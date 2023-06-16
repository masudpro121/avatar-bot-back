require('dotenv').config()
const axios = require("axios");
const did_key = process.env.DID_KEY
module.exports = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.d-id.com/talks/${id}`, {
        headers: {
          "Authorization": did_key,
        }
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  });
};
