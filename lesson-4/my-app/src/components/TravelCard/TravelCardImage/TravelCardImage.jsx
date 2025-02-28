export default function TravelCardImage({image, alt}) {
    return (
        <div className="travel-image">
            <img src={image} alt={alt} />
        </div>
    )
}