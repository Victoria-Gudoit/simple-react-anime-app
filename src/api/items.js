import { request } from "./request";

const HOST = "https://api.jikan.moe/v4/top";

export const fetchItems = (type) => {
  const url = `${HOST}/${type}`;
  const result = request(url);
  return result;
};
