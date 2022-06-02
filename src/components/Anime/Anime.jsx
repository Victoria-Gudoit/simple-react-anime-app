import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardAnime } from "./CardAnime";
import { getAnimeById, getMangaById} from "../../api/anime";

export const Anime = () => {
  const { id } = useParams();

  const [anime, setAnime] = useState({});
  const [manga, setManga] = useState({});

  useEffect(() => {
    getAnimeById(id).then(({ data }) => {
      setAnime(data);
    });
  }, []);

  useEffect(() => {
    getMangaById(id).then(({ data }) => {
      setManga(data);
    });
  }, []);

  if (anime || manga) {
    return (
      <div>
        <div>{anime ? <CardAnime {...anime} /> : <CardAnime {...manga} />}</div>
      </div>
    );
  } else {
    return <div>Вельмi шкада, але сёння не ваш дзень :(</div>;
  }
};
