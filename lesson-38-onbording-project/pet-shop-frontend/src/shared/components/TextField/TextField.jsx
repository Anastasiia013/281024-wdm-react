const TextField = ({register, name, rules, error})=> {
    return <input {...register(name)}></input>
}