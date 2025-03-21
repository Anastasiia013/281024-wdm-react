import { useState, useEffect } from "react";
import axios from "axios";

import List from "./List/List";

import styles from "./ToDoList.module.css";

const ToDoList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        setLoading(true);
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos"); // throw new Error()
        setItems(data);
      }
      catch(error) {
        setError(error.message)
      }
      finally {
        setLoading(false);
      }

      // axios.get("https://jsonplaceholder.typicode.com/todo")
      //   .then(({data}) => setItems(data))
      //   .catch(error => setError(error.message))
      //   .finally(()=> setLoading(false));

        // fetch("https://jsonplaceholder.typicode.com/todo")
        // .then(response => {
        //   if(!response.ok) {
        //     throw new Error("Request error")
        //   }
        //   return response.json()
        // })
        // .then(data => setItems(data))
        // .catch(error => setError(error))
        // .finally(()=> setLoading(false))
    };

    getItems();
  }, []);

  const loadItems = async()=> {
    try {
      setLoading(true);
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos"); // throw new Error()
      setItems(data);
    }
    catch(error) {
      setError(error.message)
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Список дел загружается</p>}
      <List items={items} />
      <button onClick={loadItems}>Load items</button>
    </div>
  );
};

export default ToDoList;
