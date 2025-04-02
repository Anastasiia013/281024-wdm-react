import { useRef } from "react";

import styles from "./ScrolableText.module.css";

const ScrolableText = ({ items = [] }) => {
  const firstParagraphRef = useRef();
  const lastParagraphRef = useRef();

  const elements = items.map((text, index) => (
    <p key={index} className={styles.text}>
      {text}
    </p>
  ));

  const scrollToTop = () => {
    firstParagraphRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const scrollToEnd = () => {
    lastParagraphRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div className={styles.wrapper}>
      <div ref={firstParagraphRef}></div>
      <button onClick={scrollToEnd} className={styles.btnScroll}>
        Scroll to end
      </button>
      {elements}
      <button onClick={scrollToTop} className={styles.btnScroll}>
        Scroll to top
      </button>
      <div ref={lastParagraphRef}></div>
    </div>
  );
};

export default ScrolableText;
