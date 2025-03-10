import {DisneyLogo, FacebookLogo, MicrosoftLogo, SonyLogo, CocaColaLogo} from "../../assets/companies-logo";

import styles from "./MostImportantCompanyList.module.css";

const MostImportantCompanyList = ()=> {
    return (
        <div className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <p className={styles.text} >Помогаем найти работу:</p>
                    <ul className={styles.list}>
                        <li><DisneyLogo /></li>
                        <li><FacebookLogo /></li>
                        <li><MicrosoftLogo /></li>
                        <li><SonyLogo /></li>
                        <li><CocaColaLogo /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MostImportantCompanyList