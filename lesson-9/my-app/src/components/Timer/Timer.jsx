import { useState, useEffect } from "react";

const Timer = ()=> {
    const [time, setTime] = useState(0);
    const [id, setId] = useState(null);

    useEffect(()=> {
        return ()=> {
            console.log("After unmounting")
            clearInterval(id);
        };
    }, [id])

    const onStart = ()=> {
        const intervalId = setInterval(()=> {
            console.log("Timer tick");
            setTime(prevTime => prevTime + 1);
        }, 1000);
        setId(intervalId);
    }

    const onStop = ()=> {
        clearInterval(id);
    }

    const onReset = ()=> {
        onStop();
        setTime(0);
    }

    return (
        <div>
            <p>Time: {time}</p>
            <button onClick={onStart}>Start</button>
            <button onClick={onStop}>Stop</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default Timer;