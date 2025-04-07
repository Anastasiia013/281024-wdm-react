import { Routes, Route } from "react-router-dom";

// import { HomePage, PostsPage, ContactsPage } from "./pages";
import HomePage from "./pages/HomePage/HomePage";
import BuyListPage from "./pages/BuyListPage/BuyListPage";
import UrgencyBuyListPage from "./pages/UrgencyBuyListPage/UrgencyBuyListPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/buy-list" element={<BuyListPage />} />
      <Route path="/urgency-buy-list" element={<UrgencyBuyListPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Navigation;
