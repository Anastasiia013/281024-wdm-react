import "./Card.css";

const Card = ({title, available = true, price})=> {
    const availableText = available ? "Есть в наличии" : "Нет в наличии";
    
    return (
        <div className="card-wrapper">
            <h4>{title}</h4>
            <p>{availableText}</p>
            <p>Цена: {price} евро</p>
        </div>
    )
}

export default Card;