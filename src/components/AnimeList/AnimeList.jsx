import { useEffect, useState, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemsSelectors } from "../../store";
import { debounce } from "lodash";
import { CardAnimeList } from "./CardAnimeList";
import css from "./styles.module.css";
import { useParams } from "react-router-dom";
import { Loader } from "../common";
import { Input } from "../Input";
import { getAnime } from "../../api/anime";
import { DropDownSearch } from "../DropDownSearch";
import { fetchTopAnime } from "../../store/slice";

export function AnimeList() {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([])
  const [dropDownSearch, setDropDownSearch] = useState(false)

  const items = useSelector(ItemsSelectors.getResourses);
  const isItemsLoading = useSelector(ItemsSelectors.isLoading);
  const isItemsError = useSelector(ItemsSelectors.isError);
  const isItemsLoaded = useSelector(ItemsSelectors.isLoaded);

  const dispatch = useDispatch();
  const { type } = useParams();

  const getTopAnime = (type) => dispatch(fetchTopAnime(type));

  const debouncedItems = useCallback(debounce(( search) => {
    getAnime(search).then((r) => setOptions(r.data)
    )
  }, 1000 ))


  useEffect(() => {
    // debouncedItems.cancel()
    if(search.length > 2) {
      debouncedItems(search)
      setDropDownSearch(true)
    } else {
      setDropDownSearch(false)
    }

  }, [search]);

  useEffect(() => {
      getTopAnime(type)
  }, [type]);

  return (
    <div className={css.wrapper}>
      <Input search={search} setSearch={setSearch} />
      {dropDownSearch && <DropDownSearch options={options}/>} 
      {isItemsLoading && <Loader/>}  
      {isItemsLoaded && (
        <div className={css.main}>
            <CardAnimeList items={items}/> {/* если items передаю так, то всё работает кроме нажатия на саму карточку,  если делаю map, то работает нажатие, но пагинация тогда под каждой карточкой (*/}
        </div>
      )}
      {isItemsError && <span>oops</span>}
    </div>
  );
}
