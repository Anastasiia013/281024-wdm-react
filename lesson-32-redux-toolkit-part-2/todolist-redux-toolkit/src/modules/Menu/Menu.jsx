import { useState } from "react";
import { Nav } from "rsuite";

const Menu = () => {
  const [active, setActive] = useState("home");

  return (
    <Nav appearance="pills" activeKey={active} onSelect={setActive}>
      <Nav.Item eventKey="home">To Do</Nav.Item>
      <Nav.Item eventKey="completed">To Do Completed</Nav.Item>
    </Nav>
  );
};

export default Menu;
