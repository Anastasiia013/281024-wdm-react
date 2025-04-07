import { useSelector } from "react-redux";

const UrgencyBuyList = ()=> {
    const items = useSelector(store => store.buyList.filter(item => item.urgency));

    const elements = items.map(({id, name})=> <li key={id}>{name}</li>);

    return (
        <ol>
            {elements}
        </ol>
    )
}

export default UrgencyBuyList;
