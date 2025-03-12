import { useState, useEffect } from "react";

import BuyListForm from "./BuyListForm/BuyListForm";
import List from "./List/List";

import styles from "./BuyList.module.css";

const BuyList = ()=> {
    const [items, setItems] = useState([]);

    useEffect(()=> {
        console.log("Что-то происходит после появления компонента на странице");
    }, []);

    const addItem = newItem => {
        setItems(prevItems => [...prevItems, newItem])
    }

    const deleteItem = name => {
        setItems(prevItems => prevItems.filter(item => item.name !== name))
    }

    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <BuyListForm onSubmit={addItem} />
            </div>
            <div className={styles.block}>
                <List items={items} deleteItem={deleteItem} />
            </div>
        </div>
    )
}

export default BuyList;