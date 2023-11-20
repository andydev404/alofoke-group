import axios from "axios";

export const YoutubeClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
});
