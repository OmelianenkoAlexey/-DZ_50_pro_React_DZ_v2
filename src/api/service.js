import axios from "axios";

export default axios.create ({
    baseURL:"https://63f0c7635b7cf4107e26a8c8.mockapi.io/api/v1",
    headers: { 'Content-Type': "application/json" },
});