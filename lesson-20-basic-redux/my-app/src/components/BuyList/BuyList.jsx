import { useState } from "react";

import BuyListForm from "./BuyListForm/BuyListForm";
import List from "./List/List";

import styles from "./BuyList.module.css";

const BuyList = ()=> {
    const [state, setState] = useState([]);

    const addItem = newItem => {
        setState(prevItems => [...prevItems, newItem]);
    }

    const deleteItem = name => {
        setState(prevItems => prevItems.filter(item => item.name !== name))
    }

    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <BuyListForm submitForm={addItem} />
            </div>
            <div className={styles.block}>
                <List items={state} deleteItem={deleteItem} />
            </div>
        </div>
    )
}

export default BuyList;