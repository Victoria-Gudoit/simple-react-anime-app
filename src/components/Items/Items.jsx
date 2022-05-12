import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemsAC, ItemsSelectors } from "../../store";
import { debounce } from "lodash";
import { CardItems } from "./CardItems";
import css from "./styles.module.css";
import { useParams } from "react-router-dom";
import { Loader } from "../common";

export function Items() {
  const [search, setSearch] = useState("");

  const items = useSelector(ItemsSelectors.getResourses);

  const isItemsLoading = useSelector(ItemsSelectors.isLoading);
  const isItemsError = useSelector(ItemsSelectors.isError);
  const isItemsLoaded = useSelector(ItemsSelectors.isLoaded);

  const dispatch = useDispatch();
  const { type } = useParams();
  const getAnime = (type, search) => dispatch(ItemsAC.fetchAnime(type, search));

  const debouncedItems = useCallback(debounce(getAnime, 1000), []);

  useEffect(() => {
    debouncedItems(type, search);
  }, [type, search]);

  return (
    <div className={css.wrapper}>
      <input className={css.input}
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        type="text"
        placeholder="Введите..."
      />
      {isItemsLoading && <Loader/>}
      {isItemsLoaded && (
        <div className={css.main}>
          {items.map((item, index) => (
            <CardItems key={item.mal_id} {...item} />
          ))}
        </div>
      )}
      {isItemsError && <span>oops</span>}
    </div>
  );
}
