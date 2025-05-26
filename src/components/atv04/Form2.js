import { useState } from 'react';
import './Form.css'

export default function Form2() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });


    function handleFirstNameChange(e) {
        // person.firstName = e.target.value; <- esse metodo é travado e lento ...
        setPerson({
            /*
            firstName: e.target.value,
            lastName: person.lastName,
            email: person.email
            */
            ...person, // difusao de objetos, copia TODAS propriedades de person
            firstName: e.target.value // mas muda o firstName
        });

    }

    function handleLastNameChange(e) {
        // person.lastName = e.target.value;
        setPerson({
            ...person,
            lastName: e.target.value
        });
    }

    function handleEmailChange(e) {
        // person.email = e.target.value;
        setPerson({
            ...person,
            email: e.target.value
        });
    }

    return (
        <form id="form2">
            <label>
                First name:
                <input
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label>
                Email:
                <input
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </form>
    );
}