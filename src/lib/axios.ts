import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://apptest.biofarma.com.tr/Bitamin/api",
});
