const url = "https://dare-nodejs-assessment.herokuapp.com/api";

module.exports = {
  loginService: async (data) => {
    try {
      return await axios.post(`${url}/policies`, data);
    } catch (error) {
      console.error(error);
    }
  },
};
