import {useState, useEffect} from "react";

const useLocalStorage = ({key, defaultValue})=> {
    const [state, setState] = useState(()=> {
        try {
            const result = JSON.parse(localStorage.getItem(key));
            return result || defaultValue;
        }
        catch {
            return defaultValue;
        }
    });

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return {state, setState}
}

export default useLocalStorage;