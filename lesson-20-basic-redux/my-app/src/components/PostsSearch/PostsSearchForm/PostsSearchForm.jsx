import {useForm} from "react-hook-form";

const PostsSearchForm = ({onSearch})=> {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmit = values => {
        onSearch(values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("q", {required: "Search text required"})} type="text" placeholder="Search text" />
            <button type="submit">Start search</button>
            {errors.q && <p style={{color: "red"}}>{errors.q.message}</p>}
        </form>
    )
}

export default PostsSearchForm;