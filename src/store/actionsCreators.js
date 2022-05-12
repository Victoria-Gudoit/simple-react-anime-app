import { ITEMS_ACTIONS } from "./constants";
import { fetchItems } from "../api/items";

const fetchStart = () => ({ type: ITEMS_ACTIONS.fetchStart });
const fetchError = () => ({ type: ITEMS_ACTIONS.fetchError });
const fetchSuccess = (result) => ({
  payload: result,
  type: ITEMS_ACTIONS.fetchSuccess,
});

export const fetchAnime = (type, search) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
      const result = await fetchItems(type, search);
      console.log(result.data);
      if (type === "characters") {
        const filter = result.data.filter((character) =>
          character.name.toLowerCase().includes(search)
        );
        dispatch(fetchSuccess(filter.slice(0, 12)));
      } else if (type === "reviews") {
        const filter = result.data.filter((review) =>
          review.entry.title.toLowerCase().includes(search)
        );
        dispatch(fetchSuccess(filter.slice(0, 12)));
      } else {
        const filter = result.data.filter((item) =>
          item.title.toLowerCase().includes(search)
        );
        dispatch(fetchSuccess(filter.slice(0, 12)));
      }
    } catch {
      dispatch(fetchError());
    }
  };
};
