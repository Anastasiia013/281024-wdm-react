export default function TravelCardStats({rating, climateType}){
    return (
        <div className="tavel-stats">
            <p>Рейтинг: {rating}</p>
            <p>Тип климата: {climateType}</p>
        </div>
    )
}