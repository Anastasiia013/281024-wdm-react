import { useContext } from "react";

import { notificationsContext } from "../../context/NotificationsProvider";

const NotificationList = () => {
  const {items, loading} = useContext(notificationsContext);

  const elements = items.map(item => <li key={item.id}>{item.text}</li>)

  return (
    <>
      <h2>Список сообщений</h2>
      {loading && <p>...Загрузка новых сообщений</p>}
      <ol>
        {elements}
      </ol>
    </>
  );
};

export default NotificationList;
