import SectionTitle from "../SectionTitle/SectionTitle";

import PopularCategoriesList from "../PopularCategoriesList/PopularCategoriesList";

import styles from "./PopularCategories.module.css";

const PopularCategories = ()=> {
    return (
        <section className={styles.section}>
            <div className="container">
                <SectionTitle title="Работа по категориям"/>
                <PopularCategoriesList />
            </div>
        </section>
    )
}

export default PopularCategories;