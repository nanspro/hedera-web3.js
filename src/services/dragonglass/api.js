import axios from "axios";
import qs from "qs";

const dragonGlassApi = axios.create({
  baseURL: "https://api.dragonglass.me/hedera/api/",
  timeout: 10000,
  headers: {
    "X-API-KEY": "974d4207-51e0-3d73-8e20-4d5952078c47"
  },
  paramsSerializer: params => qs.stringify(params, { arrayFormat: "brackets" })
});

export default dragonGlassApi;
