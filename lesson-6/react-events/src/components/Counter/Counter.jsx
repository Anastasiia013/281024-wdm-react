import { useState } from "react";

const Counter = ()=> {
    const [value, setValue] = useState(0);

    const changeValue = (event)=> {
        const {action} = event.target.dataset;
        // const action = event.target.dataset.action;
        if(action) {
            setValue(prevValue => {
                const changeCounterValue = action === "increase" ? 1 : -1;
                return prevValue + changeCounterValue
            })
            // if(action === "increase") {
            //     setValue(prevValue => prevValue + 1)
            // }
            // else {
            //     setValue(prevValue => prevValue - 1)
            // }
        }
    }

    return (
        <div onClick={changeValue}>
            <p>Счетчик: {value}</p>
            <button data-action="increase">+</button>
            <button data-action="decrease">-</button>
        </div>
    )
}

export default Counter;