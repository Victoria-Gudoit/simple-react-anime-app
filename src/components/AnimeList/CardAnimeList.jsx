import { Link, useParams } from "react-router-dom";
import css from "./styles.module.css";
import { Table, Typography } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopAnime } from "../../store/slice";
import { useEffect } from "react";
import { ItemsSelectors } from "../../store";

const { Title } = Typography;

export const CardAnimeList = () => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
  });

  const dispatch = useDispatch();

  const items = useSelector(ItemsSelectors.getResourses);

  const getTopAnime = (type, filters) => dispatch(fetchTopAnime(type, filters));

  const { type } = useParams();

  useEffect(() => {
    getTopAnime(type, filters)
  }, [type, filters]);

  const COLUMNS = [
    {
      title: "image",
      dataIndex: "images",
      key: "id",
      render: (images, e) => (
        <img
          src={
            e.images?.jpg.image_url
              ? images?.jpg.image_url
              : e.entry.images?.jpg.image_url
          }/>
      ),
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
      render: (title, e) => (
        <Link to={`/${e.type}/${e.mal_id}`}>
          {console.log(e)}
          <Title code className={css.title}>
            {e.title ? e.title : e.entry?.title ? e.entry?.title : e?.name}
          </Title>
        </Link>),
        },
        ];

  const changeHandler = (page, limit) => {
    setFilters(page, limit);
  };

  if (!items) {
    return <div>Упс, штосьцi пайшло не так</div>;
  }

  return (
    <>
      <Table
        dataSource={items.data}
        columns={COLUMNS}
        pagination={{
          pageSize: filters.limit,
          current: filters.page,
          onChange: changeHandler,
        }}
      />
    </>
  );
};
