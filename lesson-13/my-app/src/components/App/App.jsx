import ThemeProvider from "../../context/ThemeProvider";
import NotificationsProvider from "../../context/NotificationsProvider";

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import NotificationsCount from "../NotificationsCount/NotificationsCount";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";
import BuyList from "../BuyList/BuyList";
import NotificationList from "../NotificationList/NotificationList";
import PostList from "../PostList/PostList";

import styles from "./App.module.css";

import "../../styles/style.css";

function App() {
  return (
    <ThemeProvider>
      <NotificationsProvider>
        <div className={styles.header}>
          <ThemeSwitcher />
          <NotificationsCount />
        </div>

        <Menu />
        <Button>Order</Button>
        <BuyList />
        {/* <NotificationList />
        <PostList /> */}
      </NotificationsProvider>
    </ThemeProvider>
  );
}

export default App;
