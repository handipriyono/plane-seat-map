import axios from "axios";
import Config from "../constants/config";

const instance = axios.create({
  baseURL: Config.APIGateway,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
