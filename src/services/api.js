import axios from "axios";

const api = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/weather",
});

export const API_KEY = "107bae7b90c965e62f78e5de44e295e6";

export default api;
