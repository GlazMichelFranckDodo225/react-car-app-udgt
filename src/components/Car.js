const Car = (props) => {
    // console.log(props.children);
    // console.log(props);
    
    
    return (
        <div
            className="car"
            style={{
                backgroundColor: "pink",
                width: "400px",
                padding: "10px",
                margin: "5px auto"
            }}
        >
            <p>Brand : {props.children}</p>
            <p>Color : {props.color}</p>
        </div>
    )
}

export default Car;
