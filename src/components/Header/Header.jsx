import { Link } from "react-router-dom";
import css from "./header.module.css";

export const Header = () => {
  return (
    <div className={css.wraper}>
      <ul className={css.list}>
        {["manga", "characters", "reviews"].map((route) => (
          <li className={css.item} key={route}>
            <Link className={css.link} to={`/${route}`}>{route}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
