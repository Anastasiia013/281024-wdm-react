import { useState } from "react";
import { FlexboxGrid, Nav } from "rsuite";
import { Link } from "react-router-dom";

import styles from "./Menu.module.css";

const Menu = () => {
  const [active, setActive] = useState("home");

  return (
    <FlexboxGrid justify="center">
      <Nav appearance="pills" activeKey={active} onSelect={setActive}>
        <Link to="/" className={styles.link}>
          <Nav.Item as="span" eventKey="home">
            To Do
          </Nav.Item>
        </Link>
        <Link to="/completed" className={styles.link}>
          <Nav.Item as="span" eventKey="completed">
            To Do Completed
          </Nav.Item>
        </Link>
      </Nav>
    </FlexboxGrid>
  );
};

export default Menu;
