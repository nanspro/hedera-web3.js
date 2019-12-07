import axios from "axios";
import qs from "qs";

const dragonGlassApi = axios.create({
  baseURL: "https://api.dragonglass.me/hedera/api/",
  timeout: 10000,
  headers: {
    "X-API-KEY": "YOUR_ACCESS_KEY"
  },
  paramsSerializer: params => qs.stringify(params, { arrayFormat: "brackets" })
});

export default dragonGlassApi;
