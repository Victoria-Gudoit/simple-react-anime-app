import { Link, useParams } from "react-router-dom";
import css from "./styles.module.css";


export const CardItems = (props) => {
  const { type } = useParams();
  switch (type) {
    case "anime": {
      return (
        <div className={css.item}>
          <Link className={css.link} to={`/${props.type}/${props.mal_id}`}>
            <h1 className={css.title}>{props.title}</h1>
          </Link>
          <img src={props.images.jpg.image_url} alt="top" />
        </div>
      );
    }
    case "manga": {
      return (
        <div className={css.item}>
          <Link className={css.link} to={`/${props.type}/${props.mal_id}`}>
            <h1 className={css.title}>{props.title}</h1>
          </Link>
          <img src={props.images.jpg.image_url} alt="top" />
        </div>
      );
    }
    case "characters": {
      return (
        <div className={css.item}>
          <h1 className={css.title}>{props.name}</h1>
          <img src={props.images.jpg.image_url} alt="top" />
        </div>
      );
    }
    case "reviews": {
      return (
        <div className={css.review}>
            <h1 className={css.title}>{props.entry.title}</h1>
          <img src={props.entry.images.jpg.image_url} alt="top" />
          <p>{props.review}</p>
        </div>
      );
    }
    default: {
      return <div>Упс, штосьцi пайшло не так</div>;
    }
  }
};
