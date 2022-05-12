import { useParams } from "react-router-dom";
import css from "./item.module.css";

export const CardItem = (props) => {
  const { type } = useParams();
  switch (type) {
    case "TV": {
      return (
        <div className={css.wrapper}>
          <h1 className={css.title}>{props.title}</h1>
          <img src={props.images.jpg.image_url} alt="top" />
          <p>Episodes: {props.episodes}</p>
        </div>
      );
    }
    case "OVA": {
      return (
        <div className={css.wrapper}>
          <h1 className={css.title}>{props.title}</h1>
          <img src={props.images.jpg.image_url} alt="top" />
          <p>Episodes: {props.episodes}</p>
        </div>
      );
    }
    case "Manga": {
      return (
        <div className={css.wrapper}>
          <h1 className={css.title}>{props.title}</h1>
          <img src={props.images.jpg.image_url} alt="top" />
          <p>Chapters: {props.chapters}</p>
        </div>
      );
    }
    case "anime": {
      return (
        <div className={css.wrapper}>
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
