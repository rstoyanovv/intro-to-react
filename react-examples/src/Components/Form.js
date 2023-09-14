import { useState } from "react";

export default function Form() {
    const [person, setPerson] = useState({
        first_name: "",
        last_name: "",
        age: 0,
    });

    function handleFirstName(e) {
        setPerson({
            ...person,
            first_name: e.target.value
        });
    }

    function handleLastName(e) {
        setPerson({
            ...person,
            last_name: e.target.value
        });
    }

    function handleAge(e) {
        setPerson({
            ...person,
            age: e.target.value
        });
    }

    return (
        <>
            <label>
                First name:
                <input
                    value={person.first_name}
                    onChange={handleFirstName}
                />
            </label>
            <label>
                Last name:
                <input
                    value={person.last_name}
                    onChange={handleLastName}
                />
            </label>
            <label>
                Age:
                <input
                    value={person.age}
                    onChange={handleAge}
                />
            </label>

            <p>
                {person.first_name}{' '}{person.last_name}{' '}{person.age}
            </p>
        </>
    );
}