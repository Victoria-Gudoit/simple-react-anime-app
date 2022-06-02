import { useEffect, useState, useCallback} from "react";
import { useSelector } from "react-redux";
import { ItemsSelectors } from "../../store";
import { debounce } from "lodash";
import { CardAnimeList } from "./CardAnimeList";
import css from "./styles.module.css";
import { useParams } from "react-router-dom";
import { Loader } from "../common";
import { Input } from "../Input";
import { getAnime } from "../../api/anime";
import { DropDownSearch } from "../DropDownSearch";


export function AnimeList() {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([])
  const [dropDownSearch, setDropDownSearch] = useState(false)

  const isItemsLoading = useSelector(ItemsSelectors.isLoading);
  const isItemsError = useSelector(ItemsSelectors.isError);

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

 
  return (
    <div className={css.wrapper}>
      <Input search={search} setSearch={setSearch} />
      {dropDownSearch && <DropDownSearch options={options}/>} 
      {isItemsLoading && <Loader/>} 
      <CardAnimeList/>     
      {isItemsError && <span>oops</span>}
    </div>
  );
}
