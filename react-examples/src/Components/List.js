import { useState } from "react";

let nextId = 0;

export default function List() {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);

    return (
        <>
            <h2>List of car models:</h2>
            <input
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />

            <button
                onClick={() => {
                    setList([
                        ...list,
                        {
                            id: nextId++,
                            name: name
                        }
                    ]);
                }}
            >Add Car Model</button>

            <ul>
                {list.map(element => (
                    <li key={element.id}> {element.name} </li>
                ))}
            </ul>
        </>
    );
}