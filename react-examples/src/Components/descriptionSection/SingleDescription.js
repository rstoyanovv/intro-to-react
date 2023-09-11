export default function Detail({ name, text, isExist }) {
    const color = "rgb(212, 223, 237)";
    if (isExist === true) {
        return (
            <div className="detail" >
                <h2 style={{color: color}}> {name} </h2>
                <p style={{color: color}}> {text} </p>
            </div>
        );
    }

    if (isExist === false) {
        return (
            <div className="detail">
                <h2 style={{color: color}}>No existing description for {name}</h2>
            </div>
        );
    }
}