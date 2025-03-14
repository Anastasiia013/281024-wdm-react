const List = ({items = []})=> {
    const elements = items.map(item => (
        <li key={item.id}>
            {item.title}. {item.completed ? "Сделано" : "Не сделано"}
            </li>
    ));

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default List;