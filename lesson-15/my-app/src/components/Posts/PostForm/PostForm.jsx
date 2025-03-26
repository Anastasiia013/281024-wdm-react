import { useId } from "react";
import { useForm } from "react-hook-form";

import Button from "../../Button/Button";

import { defaultValues } from "./fields";

import styles from "./PostForm.module.css";

const PostForm = ({onAddPost})=> {
    const titleId = useId();
    const textId = useId();

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues,
    });

    const onSubmit = values => {
        onAddPost(values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.fieldBlock}>
                <label className={styles.label} htmlFor={titleId}>Заголовок поста:</label>
                <input {...register("title", {required: "Название поста нужно указать"})} className={styles.textField} type="text" placeholder="Заголовок поста" id={titleId} />
                {errors.title && <p className={styles.error}>{errors.title.message}</p>}
            </div>
            <div className={styles.fieldBlock}>
                <label className={styles.label} htmlFor={textId}>Текст поста:</label>
                <textarea {...register("text", {required: "Текст поста нужно написать"})} className={styles.textField} placeholder="Текст поста" id={textId}></textarea>
                {errors.text && <p className={styles.error}>{errors.text.message}</p>}
            </div>
            <div className={styles.btnWrapper}>
                <Button>Публикация</Button>
            </div>
        </form>
    )
}

export default PostForm;