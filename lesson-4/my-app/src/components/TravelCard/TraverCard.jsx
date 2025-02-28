import TravelCardImage from "./TravelCardImage/TravelCardImage"
import TravelCardInfo from "./TravelCardInfo/TravelCardInfo";
import TravelCardStats from "./TravelCardStats/TravelCardStats";

export default function TravelCard({ image, info, stats }) {
  return (
    <div>
        <TravelCardImage image={image} alt={info.title} />
        <TravelCardInfo title={info.title} description={info.description} />
        <TravelCardStats rating={stats.rating} climateType={stats.climateType} />
    </div>
  )
}
