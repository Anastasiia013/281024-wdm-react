import { useMemo, useId, memo } from "react";
import { useForm, Controller } from "react-hook-form";
import { nanoid } from "nanoid";

// import { Input } from "@material-ui/core"
import Input from "@mui/material/Input";

import Button from "@mui/material/Button";

import styles from "./ProductsSearch.module.css";

const ProductsSearch = ({ submitForm }) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const searchId = useMemo(() => nanoid(), []);

  const onSubmit = (values) => {
    submitForm(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Controller
        name="search"
        control={control}
        rules={{required: "Search field required"}}
        render={({ field }) => (
          <Input
            id={searchId}
            {...field}
            variant="outlined"
            placeholder="Search text"
          />
        )}
      />
      {/* <Input
            id={searchId}
            {...register("search", {required: "Search field required"})}
            variant="outlined"
            placeholder="Search text"
          /> */}
      <Button type="submit" variant="outlined">Find</Button>

      {errors.search && <p className={styles.error}>{errors.search.message}</p>}
    </form>
  );
};

export default memo(ProductsSearch);
