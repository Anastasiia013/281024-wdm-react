import { useState } from "react";

import styles from "./ToggleButton.module.css";

const ToggleButton = ({children})=> {
    const [active, setActive] = useState(false);

    const handleClick = ()=> {
        setActive(prevState => !prevState);
    };

    const fullClassName = active ? `${styles.btn} ${styles.active}` : styles.btn;

    return <button onClick={handleClick} className={fullClassName}>{children}</button>
}

export default ToggleButton;