import { Link, useParams } from "react-router-dom";
import css from "./styles.module.css";


export const CardItems = (props) => {
  const { type } = useParams();
 

      const getRenderFooterByType = {
        characters: () => props?.name,
        reviews: () => props.entry?.title,
      manga: () => props?.title,
      anime: () => props?.title,
    };

      const renderFooter = getRenderFooterByType[type]
    
      if (!renderFooter ) {
        return <div>Упс, штосьцi пайшло не так</div>;
      }
    
       return  (
        <div className={css.review}>
        <Link className={css.link} to={`/${props.type}/${props.mal_id}`}>
       <h1 className={css.title}>{renderFooter()}</h1>
     </Link>
     <img src={props?.images?.jpg.image_url} alt="top" />
     <p>{props.review}</p>
   </div>
       )
    }
    

