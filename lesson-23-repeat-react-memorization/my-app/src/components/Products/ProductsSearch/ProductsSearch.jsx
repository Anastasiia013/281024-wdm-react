import { useMemo, useId } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

import styles from "./ProductsSearch.module.css";

const ProductsSearch = ({submitForm})=> {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const searchId = useMemo(()=> nanoid(), []);
    // const searchId = useId();
    // console.log(searchId);

    const onSubmit = values => {
        submitForm(values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <label htmlFor={searchId}>Search text</label>
            <input id={searchId} {...register("search", {required: "Search required field"})} placeholder="Search text"/>
            <button type="submit">Find</button>
            {errors.search && <p className={styles.error}>{errors.search.message}</p>}
        </form>
    )
}

export default ProductsSearch;