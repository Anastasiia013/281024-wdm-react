import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import MostImportantCompanyList from "../../components/MostImportantCompanyList/MostImportantCompanyList";
import PopularCategories from "../../components/PopularCategories/PopularCategories";
import NewVacancies from "../../components/NewVacancies/NewVacancies";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <MostImportantCompanyList />
      <PopularCategories />
      <NewVacancies items={newVacancyItems} />
    </>
  );
};

export default HomePage;
