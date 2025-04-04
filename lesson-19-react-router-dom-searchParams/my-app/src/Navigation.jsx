import { Routes, Route } from "react-router-dom";

// import { HomePage, PostsPage, ContactsPage } from "./pages";
import HomePage from "./pages/HomePage/HomePage";
import PostsPage from "./pages/PostsPage/PostsPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Navigation;
