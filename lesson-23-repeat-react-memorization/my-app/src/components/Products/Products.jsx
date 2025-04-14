import {useState, useEffect, useCallback} from "react";
import { useSearchParams } from "react-router-dom";

import ProductsSearch from "./ProductsSearch/ProductsSearch";
import ProductList from "./ProductList/ProductList";

import { getProducts } from "../../api/products";

import styles from "./Products.module.css";

const Products = ()=> {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search");
    
    useEffect(()=> {
        const fetchProducts = async()=> {
            try {
                setLoading(true);
                const data = await getProducts({search});
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
    }, [search]);

    const onSearch = useCallback(({search})=> {
        setSearchParams({search});
    }, [setSearchParams]);

    return (
        <div>
            <ProductsSearch submitForm={onSearch} />
            <ProductList items={items} />
            {loading && <p>Loading...</p>}
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default Products;