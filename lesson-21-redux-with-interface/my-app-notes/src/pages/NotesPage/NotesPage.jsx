import PageTitle from "../../components/PageTitle/PageTitle";
import MyNotes from "../../components/MyNotes/MyNotes";

const NotesPage = () => {
  return (
    <main>
      <div className="container">
        <PageTitle>My notes</PageTitle>
        <MyNotes />
      </div>
    </main>
  );
};

export default NotesPage;
