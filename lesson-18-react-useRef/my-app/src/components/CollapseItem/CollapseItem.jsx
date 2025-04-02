import { useState, useRef } from "react";

import styles from "./CollapseItem.module.css";

const CollapseItem = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();

  const handleClick = () => setOpen((prevOpen) => !prevOpen);

  return (
    <div>
      <p
        className={open ? `${styles.title} ${styles.active}` : styles.title}
        onClick={handleClick}>
        {title}
      </p>
      <div ref={contentRef} className={styles.content} style={{
        height: open ? `${contentRef.current?.scrollHeight}px` : 0
      }} >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CollapseItem;
