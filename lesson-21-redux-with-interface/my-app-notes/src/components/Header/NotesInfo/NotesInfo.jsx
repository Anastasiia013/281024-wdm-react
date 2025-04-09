import { useSelector } from "react-redux";

const NotesInfo = () => {
  const {count, importantCount} = useSelector((store) => {
    const {length: count} = store.notes;
    // const count = store.notes.length;
    const {length: importantCount} = store.notes.filter((item) => item.important);

    return {
        count,
        importantCount
    }
  });


  return <p>Всего заметок: {count}. Важных: {importantCount}.</p>;
};

export default NotesInfo;
