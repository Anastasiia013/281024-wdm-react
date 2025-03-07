import { useState } from "react";

import styles from "./AccordionComponent.module.css";

const AccordionComponent = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  const handleClick = ()=> {
    setOpen(prevOpen => {
        return !prevOpen;
    })
  }

  const titleClassName = open ? `${styles.title} ${styles.expanded}` : styles.title;
  const contentClassName = open ? `${styles.content} ${styles.expanded}` : styles.content;

  return (
    <div>
      <p onClick={handleClick} className={titleClassName}>{title}</p>
      <div className={contentClassName}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AccordionComponent;
