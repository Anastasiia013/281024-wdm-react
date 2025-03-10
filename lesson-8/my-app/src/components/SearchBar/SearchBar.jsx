import SearchForm from "../SearchForm/SearchForm";

import styles from "./SearchBar.module.css";

const SearchBar = ()=> {
        return (
            <div className={styles.search_bar}>
                <div className="container">
                    <h1 className={styles.slogan}>Один клик<br /> и работа в кармане</h1>
                    <SearchForm />
                </div>
            </div>
        )
}

export default SearchBar;