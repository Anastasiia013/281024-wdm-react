import { useContext } from "react";

import { notificationsContext } from "../../context/NotificationsProvider";

import styles from "./NotificationsCount.module.css";

const NotificationsCount = ()=> {
    const {items} = useContext(notificationsContext);

    return (
        <div>
            У вас <span className={styles.count}>{items.length}</span> новых сообщений
        </div>
    )
}

export default NotificationsCount;