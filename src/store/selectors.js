import { LOAD_STATUSES } from "./constants.js";

export const getResourses = (state) => state.anime.data;

export const getLoadStatus = (state) => state.anime.loadStatus;

export const isLoading = (state) =>
  getLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR;
export const isLoaded = (state) =>
  getLoadStatus(state) === LOAD_STATUSES.LOADED;
