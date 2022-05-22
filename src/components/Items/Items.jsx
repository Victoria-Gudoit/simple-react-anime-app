import { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemsAC, ItemsSelectors } from "../../store";
import { debounce } from "lodash";
import { CardItems } from "./CardItems";
import css from "./styles.module.css";
import { useParams } from "react-router-dom";
import { Loader } from "../common";
import { Input } from "../Input";
import { getAnime } from "../../api/items";
import { DropDownMenu } from "../DropdownMenu";


export function Items() {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([])
  const [dropDownMenu, setDropDownMenu] = useState(false)


  const items = useSelector(ItemsSelectors.getResourses);
  const isItemsLoading = useSelector(ItemsSelectors.isLoading);
  const isItemsError = useSelector(ItemsSelectors.isError);
  const isItemsLoaded = useSelector(ItemsSelectors.isLoaded);

  const dispatch = useDispatch();
  const { type } = useParams();

  const getTopAnime = (type) => dispatch(ItemsAC.fetchTopAnime(type));

  const debouncedItems = useCallback(debounce(( search) => {
    getAnime(search).then((r) => setOptions(r.data.slice(0, 10))
    )
  }, 1000 ))

  console.log(dropDownMenu);
  useEffect(() => {
    // debouncedItems.cancel()
    if(search.length > 2) {
      debouncedItems(search)
      setDropDownMenu(true)
    } else {
      setDropDownMenu(false)
    }

  }, [search]);


  useEffect(() => {
      getTopAnime(type, search)
  }, [type, search]);

  return (
    <div className={css.wrapper}>
      <Input search={search} setSearch={setSearch} />
      {dropDownMenu && <DropDownMenu options={options}/>}
      {isItemsLoading && <Loader/>}
      {isItemsLoaded && (
        <div className={css.main}>
          {items.map((item) => (
            <CardItems key={item.mal_id} {...item} />
          ))}
        </div>
      )}
      {isItemsError && <span>oops</span>}
    </div>
  );
}
