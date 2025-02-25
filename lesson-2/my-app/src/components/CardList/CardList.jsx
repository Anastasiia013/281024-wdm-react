import Card from "./Card/Card";

import "./CardList.css";

const CardList = ({ items = [] }) => {
  const elements = items.map((item) => (
    <Card {...item} />
  ));

  return <div className="card-list">{elements}</div>;
};

export default CardList;


