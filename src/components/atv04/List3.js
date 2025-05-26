import { useState } from 'react';
import './List.css';

let nextId = 3; // proxima insercao ja inicia no 3
const initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
];

export default function List3() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(
        initialArtists
    );

    function handleClick() {
        const insertAt = 1; // uma index qualquer na array, onde o novo item sera inserido
        const nextArtists = [
        // itens antes do ponto de insercao:
        ...artists.slice(0, insertAt), // primeiro item ate antes da posicao escolhida (nao inclusivo)
        // novo item inserido:
        { id: nextId++, name: name },
        // itens depois do ponto de insercao:
        ...artists.slice(insertAt) // posicao escolhida ate o final da array
        ];
        setArtists(nextArtists);
        setName(''); // limpa o campo de input
    }

    return (
        <section className="list3">
            <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleClick}>
                Insert
            </button>
            <ul>
                {artists.map(artist => (
                <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </section>
    );
}
