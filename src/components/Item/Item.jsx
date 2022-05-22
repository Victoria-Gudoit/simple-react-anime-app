import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardItem } from "./CardItem";
import { getAnimeById } from "../../api/items";


export const Item = () => {
  const {id} = useParams()

  const [data, setData] = useState({})

  useEffect(() => {
    getAnimeById( id).then(({data}) => {
    setData(data)
  })
}, [])


  if (!data) {
    return <div>Вельмi шкада, але сёння не ваш дзень :(</div>;
  } else {
    return (
      <div>
        <div>
          <CardItem {...data}/>
        </div>
      </div>
    );
  }
};
