import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.100.86:8081/api"
  baseURL: "http://localhost:8081/api"
});

// export function setTokenHeader(token) {
//   if (token) {
//     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete api.defaults.headers.common["Authorization"];
//   }
// }

export default api;
