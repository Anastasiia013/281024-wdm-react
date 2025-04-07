import { useSelector, useDispatch } from "react-redux";

import BuyListForm from "./BuyListForm/BuyListForm";
import List from "./List/List";

import { addBuListItem, deleteBuyListItem } from "../../redux/actionCreators";

import styles from "./BuyList.module.css";

const BuyList = ()=> {
    const state = useSelector(store => store.buyList);
    const dispatch = useDispatch();

    const addItem = newItem => {
        const action = addBuListItem(newItem);
        dispatch(action);
    }

    const deleteItem = id => {
        dispatch(deleteBuyListItem(id));
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