// import { useState, useEffect } from "react";

import BuyListForm from "./BuyListForm/BuyListForm";
import List from "./List/List";

import useLocalStorage from "../../hooks/useLocalStorage";

import styles from "./BuyList.module.css";

console.log(JSON.parse(localStorage.getItem("name")))

const BuyList = ()=> {
    const {state, setState} = useLocalStorage({key: "buy-list", defaultValue: []});
    // const {state: items, setState: setItems} = useLocalStorage({key: "buy-list", defaultValue: []});
    // const [items, setItems] = useState(()=> {
    //     try {
    //         const list = JSON.parse(localStorage.getItem("buy-list"));
    //         return list?.length ? list : [];
    //     }
    //     catch {
    //         return [];
    //     }
    // });

    // useEffect(()=> {
    //     localStorage.setItem("buy-list", JSON.stringify(items));
    // }, [items]);

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