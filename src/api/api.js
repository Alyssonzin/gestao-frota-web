import axios from "axios";

const API_URL = "https://api-gestao-frota.onrender.com";
const API_URL_LOCAL = "http://localhost:8080";

export const api = axios.create({
    baseURL: API_URL
});