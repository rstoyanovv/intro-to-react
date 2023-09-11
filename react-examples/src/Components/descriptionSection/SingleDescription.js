export default function Description({ model, text, isExist }) {
    const color = "rgb(212, 223, 237)";

    if (isExist === true) {
        return (
            <div className="detail" >
                <h3 style={{color: color}}> {model} </h3>
                <p style={{color: color}}> {text} </p>
            </div>
        );
    }

    if (isExist === false) {
        return (
            <div className="detail">
                <h3 style={{color: color}}>No existing description for {model}</h3>
            </div>
        );
    }
}