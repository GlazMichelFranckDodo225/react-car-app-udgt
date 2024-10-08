// const Car = (props) => {
const Car = ({children, color}) => {
    // console.log(props.children);
    // console.log(props);
    // const {children, color} = props;

    // const colorInfo = color ? color : "Néant";
    let colorInfo = "";
    if (color) {
        colorInfo = color;           
    } else {
        colorInfo = "Néant";
    }
    
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
            {/* <p>Brand : {props.children}</p>
            <p>Color : {props.color}</p> */}
            {/* <p>Brand : {children}</p>
            <p>Color : {color}</p> */}
            <p>Brand : {children}</p>
            <p>Color : {colorInfo}</p>
        </div>
    )
}

export default Car;
