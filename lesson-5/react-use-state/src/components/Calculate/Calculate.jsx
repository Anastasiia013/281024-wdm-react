import { useState } from "react";

const Calculate = ({initialValue})=> {
    const [count, setCount] = useState(initialValue);

    const resetCount = ()=> {
        setCount(initialValue)
    }

    const incrimentCount = ()=> {
        setCount(prevCount => prevCount + 1);
    }

    const decrementCount = ()=> {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div>
            <p>{count}</p>
            <div>
                <button onClick={resetCount}>Reset</button>
                <button onClick={incrimentCount}>incriment</button>
                <button onClick={decrementCount}>Decriment</button>
            </div>
        </div>
    )
}

export default Calculate;