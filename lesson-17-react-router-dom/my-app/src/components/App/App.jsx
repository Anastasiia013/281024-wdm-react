import { Routes, Route } from "react-router-dom";

import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";

import HomePage from "../../pages/HomePage/HomePage";
import PostsPage from "../../pages/PostsPage/PostsPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import PrivacyPolicyPage from "../../pages/PrivacyPolicyPage/PrivacyPolicyPage";
import SinglePostPage from "../../pages/SinglePostPage/SinglePostPage";

import "../../styles/style.css";

function App() {
  return (
    <>
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
