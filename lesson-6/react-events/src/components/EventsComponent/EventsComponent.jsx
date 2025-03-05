const EventsComponent = ()=> {
    const handleClick = ()=> console.log("Click");

    const handleDoubleClick = ()=> console.log("Double click");

    const handleMouseDown = ()=> console.log("Mouse down");

    const handleMouseUp = ()=> console.log("Mouse up");

    const handleMouseOver = ()=> console.log("Mouse over");

    const handleMouseOut = ()=> console.log("Mouse out");

    const handleMouseMove = ()=> console.log("Mouse move");

    return (
        <div>
            <h2 onClick={handleClick}>Click</h2>
            <h2 onDoubleClick={handleDoubleClick}>Double click</h2>
            <h2 onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>Mouse down/up</h2>
            <h2 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Mouse over</h2>
            <h2 onMouseMove={handleMouseMove}>Mouse move</h2>
        </div>
    )
}

export default EventsComponent;