import { useState } from "react";

import initialState from "./initialState";

const BuyList = ()=> {
    const [list, setList] = useState(initialState);
    console.log(list);
    const deleteListItem = name => {
        setList(prevList => {
            const newList = prevList.filter(item => item !== name);
            return newList;
        })
    };

    const elements = list.map(item => (
        <li key={item}>{item} <button onClick={()=> deleteListItem(item)}>Delete</button></li>
    ));

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default BuyList