import { Link, useParams } from "react-router-dom";
import css from "./styles.module.css";
import { Table, Typography } from "antd";
import { useState } from "react";

const { Title } = Typography;

export const CardAnimeList = (props) => {
  const [data, setData] = useState({
    page: 1,
    limit: 10,
  });

  const { type } = useParams();

  const getRenderFooterByType = {
    characters: () => props.items?.name,
    reviews: () => props.items.entry?.title,
    manga: () => props.items?.title,
    anime: () => props.items?.title,
  };

  const renderFooter = getRenderFooterByType[type];

  const COLUMNS = [
    {
      title: "image",
      dataIndex: "images",
      key: "id",
      render: (images) => <img src={images.jpg.image_url} alt="top" />,
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
      render: (
        title,
        type,
        mal_id //не понимаю как передать тип и айди в линк и как передать тогда renderFooter
      ) => (
        <Link className={css.link} to={`/${type}/${mal_id}`}>
          <Title code className={css.title}> 
            {title}  
          </Title>
        </Link>
      ),
    },
  ];

  const changeHandler = (page, limit) => {
    setData({ page, limit });
  };

  if (!renderFooter) {
    return <div>Упс, штосьцi пайшло не так</div>;
  }

  return (
    <div className={css.review}>
      <Table
        dataSource={props.items}
        columns={COLUMNS}
        pagination={{
          pageSize: data.limit,
          current: data.page,
          onChange: changeHandler,
        }}
      />
    </div>
  );
};
