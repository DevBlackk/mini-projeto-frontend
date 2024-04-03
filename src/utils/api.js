import axios from "axios";

export default axios.create({
  baseURL: "https://mini-porjeto-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
})