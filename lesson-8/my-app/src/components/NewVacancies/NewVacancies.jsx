import SectionTitle from "../SectionTitle/SectionTitle";
import NewVacancyList from "../NewVacancyList/NewVacancyList";

import styles from "./NewVacancies.module.css";

import newVacancyItems from "../../data/newVacancyItems";

const NewVacancies = ()=> {
    return (
        <section className={styles.section}>
            <div className="container">
                <SectionTitle title="Новые вакансии" subtitle="Найди работу своей мечты прямо сейчас" />
                <NewVacancyList items={newVacancyItems} />
            </div>
        </section>
    )
}

export default NewVacancies;