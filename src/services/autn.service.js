const axios = require("axios");
// TODO - put on env file
const url = "https://dare-nodejs-assessment.herokuapp.com/api";

module.exports = {
  login: async (data) => {
    try {
      return await axios.post(`${url}/login`, data);
    } catch (error) {
      console.error(error);
    }
  },
};
