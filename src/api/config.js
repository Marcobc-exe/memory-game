import axios from "axios"

const MODYO_URL = "https://fed-team.modyo.cloud/"

const api = axios.create({
  baseURL: MODYO_URL
});

export { api };
