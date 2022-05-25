import css from "./styless.module.css";
import { Link } from "react-router-dom";

export const DropDownSearch = (props) => {
  return (
    <ul className={css.list}>
      {props.options.map((item) => (
        <li className={css.item}>
          <Link className={css.link} to={`/anime/${item.mal_id}`}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
