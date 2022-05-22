import { useParams } from "react-router-dom";
import css from "./item.module.css";



export const CardItem = (props) => {

  const getRenderFooterByType = {
  TV: () => `Episodes: ${props.episodes}`,
  OVA: () => `Episodes: ${props.episodes}`,
  Manga: () => `Episodes: ${props.chapters}`,
  anime: () => `Episodes: ${props.episodes}`,
};

const { type } = useParams();
  const renderFooter = getRenderFooterByType[type]

  if (!renderFooter ) {
    return <div>Упс, штосьцi пайшло не так</div>;
  }

   return  (
    <div className={css.wrapper}>
      <h1 className={css.title}>{props.title}</h1>
      <img src={props.images?.jpg.image_url} alt="top" />
      <p>{renderFooter()}</p>
    </div>
   )
}
