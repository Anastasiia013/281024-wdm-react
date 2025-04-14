import {useState, useEffect} from "react";

import ProductsSearch from "./ProductsSearch/ProductsSearch";
import ProductList from "./ProductList/ProductList";

import { getProducts } from "../../api/products";

import styles from "./Products.module.css";

const Products = ()=> {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchProducts = async()=> {
            try {
                setLoading(true);
                const data = await getProducts();
                setItems(data);
            }
            catch(error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div>
            <ProductsSearch />
            <ProductList items={items} />
            {loading && <p>Loading...</p>}
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default Products;