import { useForm } from "react-hook-form";

import styles from "./ProductsSearch.module.css";

const ProductsSearch = ()=> {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmit = values => {
        console.log(values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input {...register("search", {required: "Search required field"})} placeholder="Search text"/>
            <button type="submit">Find</button>
            {errors.search && <p className={styles.error}>{errors.search.message}</p>}
        </form>
    )
}

export default ProductsSearch;