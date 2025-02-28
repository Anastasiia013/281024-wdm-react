export default function TravelCardInfo({title, description}){
    return (
        <div className="travel-info">
        <p>Название: {title}</p>
        <p>Описание: {description}</p>
    </div>
    )
}