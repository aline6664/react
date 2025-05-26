import { useState } from 'react';
import './List.css';

let nextId = 3;
const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' },
];

export default function List4() {
    const [list, setList] = useState(initialList);

    function handleClick() {
        const nextList = [...list]; // realiza uma copia da array
        nextList.reverse(); // possibilitando utilizar metodo de reverse() e manter a lista original imutavel
        setList(nextList);
    }

    return (
        <section className="list4">
            <button onClick={handleClick}>
                Reverse
            </button>
            <ul>
                {list.map(artwork => (
                <li key={artwork.id}>{artwork.title}</li>
                ))}
            </ul>
        </section>
    );
}
