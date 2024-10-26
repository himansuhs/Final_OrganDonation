import axios from "axios";

const baseURL = "https://final-organdonation-backend.onrender.com";

export default axios.create({ baseURL: baseURL });
