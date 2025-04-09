import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import NotesPage from './pages/NotesPage/NotesPage';
import ImportantNotesPage from "./pages/ImportantNotesPage/ImportantNotesPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/notes-important" element={<ImportantNotesPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Navigation;
