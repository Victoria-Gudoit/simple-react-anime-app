import { request } from "./request";

const HOST = "https://api.jikan.moe/v4/anime?q=";
const HOST_ANIME_ID = "https://api.jikan.moe/v4/anime";

const HOST_TOP_ANIME = "https://api.jikan.moe/v4/top";

export const getTopAnime = (type) => {
  const url = `${HOST_TOP_ANIME}/${type}`;
  const result = request(url);
  return result;
};

export const getAnime = (anime) => {
  return request(`${HOST}${anime}`);
};

export const getAnimeById = (id) => {
  return request(`${HOST_ANIME_ID}/${id}`);
};
