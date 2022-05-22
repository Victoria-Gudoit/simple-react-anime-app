import css from "./styless.module.css";
import { Link } from "react-router-dom";
import {DropDownMenu} from "./DropdownMenu"

export const Input = (props) => {

  return (
    <div>
      <input
        value={props.search}
        onChange={({ target }) => props.setSearch(target.value)}
        type="text"
        placeholder="Введите аниме..."
      />
    </div>
  );
};
