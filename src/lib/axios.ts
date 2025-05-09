import axios from "axios";

export const api = axios.create({
  baseURL: "https://game-store-dashboard-api-production.up.railway.app",
});
