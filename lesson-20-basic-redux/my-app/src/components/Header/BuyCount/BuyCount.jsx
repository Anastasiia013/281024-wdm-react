import { useSelector } from "react-redux";

const BuyCount = ()=> {
    const count = useSelector(store => store.buyList.length);

    return <p>Всего покупок: {count}</p>
}

export default BuyCount;