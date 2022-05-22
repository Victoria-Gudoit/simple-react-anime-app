import { LOAD_STATUSES } from "./constants.js";

export const getResourses = (state) => state.items.data;
export const getLoadStatus = (state) => state.items.loadStatus;

export const isLoading = (state) =>
  getLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR;
export const isLoaded = (state) =>
  getLoadStatus(state) === LOAD_STATUSES.LOADED;

export const getTaskById = (taskId) => (state) =>
  getResourses(state).find(({ mal_id }) => mal_id === +taskId);
