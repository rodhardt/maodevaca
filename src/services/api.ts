import axios from "axios";

const api = axios.create({
  baseURL: "https://maodevacaserver.herokuapp.com",
});

export default api;
