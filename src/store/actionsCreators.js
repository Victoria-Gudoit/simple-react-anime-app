import { ITEMS_ACTIONS } from "./constants";
import { getTopAnime } from "../api/items";

const fetchStart = () => ({ type: ITEMS_ACTIONS.fetchStart });
const fetchError = () => ({ type: ITEMS_ACTIONS.fetchError });
const fetchSuccess = (result) => ({
  payload: result,
  type: ITEMS_ACTIONS.fetchSuccess,
});

export const fetchTopAnime = (type) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
      const result = await getTopAnime(type);

      dispatch(fetchSuccess(result.data.slice(0, 12)));
    } catch {
      dispatch(fetchError());
    }
  };
};
