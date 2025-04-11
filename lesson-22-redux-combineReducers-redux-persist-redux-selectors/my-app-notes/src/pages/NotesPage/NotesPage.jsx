import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import PageTitle from "../../components/PageTitle/PageTitle";
import MyNotes from "../../components/MyNotes/MyNotes";

import { selectIsAuthenticate } from "../../redux/autenticate/autenticate-selectors";

const NotesPage = () => {
  const isAuthenticate = useSelector(selectIsAuthenticate);

  if(!isAuthenticate) {
   return <Navigate to="/login" />
  }

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
