import {createContext, useState, useEffect} from "react";
import axios from "axios";

export const notificationsContext = createContext([]);

const NotificationsProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchItems = async()=> {
            try {
                setLoading(true);
                const {data} = await axios.get("https://67d7f66f9d5e3a10152cce22.mockapi.io/api/notifications");
                setItems(data);
            }
            catch(error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchItems();
    }, []);

    return (
        <notificationsContext.Provider value={{items, loading, error}}>
            {children}
        </notificationsContext.Provider>
    )
}

export default NotificationsProvider;