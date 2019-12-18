import axios from "axios";
import qs from "qs";
import dotenv from "dotenv";

dotenv.config()
const dragonGlassApi = axios.create({
  baseURL: "https://api.dragonglass.me/hedera/api/",
  timeout: 10000,
  headers: {
    "X-API-KEY": process.env.ACCESS_TOKEN
  },
  paramsSerializer: params => qs.stringify(params, { arrayFormat: "brackets" })
});

export default dragonGlassApi;
