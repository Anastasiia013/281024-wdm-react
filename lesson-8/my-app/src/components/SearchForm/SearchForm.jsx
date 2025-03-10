// import search_icon from "../../assets/icons/search_icon.svg";
import { SearchIcon, LocationIcon } from "../../assets/icons/form";

import styles from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.field_wrapper}>
        <div className={styles.form_group}>
          {/* <img src={search_icon} alt="search icon" /> */}
          <SearchIcon />
          <input
            className={styles.text_field}
            name="company"
            type="text"
            placeholder="Должность или компания"
          />
        </div>
        <span className={styles.divider}>|</span>
        <div className={styles.form_group}>
          {/* <img src={search_icon} alt="search icon" /> */}
          <LocationIcon />
          <input
            className={styles.text_field}
            name="country"
            type="text"
            placeholder="Город, Страна"
          />
        </div>
      </div>
      <button className={styles.btn}>Поиск</button>
    </form>
  );
};

export default SearchForm;
