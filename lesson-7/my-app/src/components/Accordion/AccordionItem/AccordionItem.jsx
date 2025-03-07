import styles from "./AccordionItem.module.css";

const AccordionItem = ({ open, index, changeOpenIndex, title, content }) => {

  const handleClick = ()=> {
    changeOpenIndex(index);
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

export default AccordionItem;
