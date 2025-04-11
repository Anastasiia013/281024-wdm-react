import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import PageTitle from "../../components/PageTitle/PageTitle";
import ImportantNotes from "../../components/ImportantNotes/ImportantNotes";

import { selectIsAuthenticate } from "../../redux/autenticate/autenticate-selectors";

const ImportantNotesPage = () => {
  const isAuthenticate = useSelector(selectIsAuthenticate);

  if(!isAuthenticate) {
    return <Navigate to="/login" />
  }

  return (
    <main>
      <div className="container">
        <PageTitle>Important notes</PageTitle>
        <ImportantNotes />
      </div>
    </main>
  );
};

export default ImportantNotesPage;
