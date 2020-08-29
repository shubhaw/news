import axios from "axios";

const instance = axios.create(
    {
        baseURL: "https://newsapi.org/v2/",
        headers: {
            "x-api-key": process.env.REACT_APP_NEWS_API_KEY
        }
    }
);

export default instance;
