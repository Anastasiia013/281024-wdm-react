const List = ({items = [], deleteItem})=> {
    const elements = items.map(item => (
        <li key={item.name}>
            Тип: {item.type}.
            {item.name}. 
            {item.urgency && "Срочно!"} 
            <button onClick={()=> deleteItem(item.name)}>Delete</button></li>
    ));

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default List;