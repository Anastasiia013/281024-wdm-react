import { useState } from "react";

import styles  from "./ShowTextButton.module.css";

const ShowTextButton = ({firstText, secondText, nextText})=> {
    const [show, setShow] = useState(false);

    const handleClick = ()=> setShow(prevState => !prevState);
    return (
        <>
            <button onClick={handleClick} className={styles.btn}>{show ? secondText: firstText}</button>
            {show && <span>{nextText}</span>}
        </>
    )
}

export default ShowTextButton;