// const Car = (props) => {
const Car = ({children, color}) => {
    // console.log(props.children);
    // console.log(props);
    // const {children, color} = props;
    
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
            <p>Brand : {children}</p>
            <p>Color : {color}</p>
        </div>
    )
}

export default Car;
