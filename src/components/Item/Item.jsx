import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ItemsSelectors } from "../../store";
import { CardItem } from "./CardItem";

export const Item = () => {
  const { id } = useParams();

  const GetTaskById = (id) => {
    const item = useSelector((state) => ItemsSelectors.getTaskById(id)(state));
    return item;
  };

  const card = GetTaskById(id);

  if (!card) {
    return <div>Вельмi шкада, але сёння не ваш дзень :(</div>;
  } else {
    return (
      <div>
        <div>
          <CardItem {...card} />
        </div>
      </div>
    );
  }
};
