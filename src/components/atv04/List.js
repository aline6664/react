import { useState } from 'react';
import './List.css';

let nextId = 0;

export default function List() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return (
        <section className="list">
            <h1>Inspiring sculptors: </h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setArtists( // troque o estado atual
                    [ // com um novo array
                        ...artists, // contendo todos itens ja inseridos
                        {
                            id: nextId++, // e com o novo item adicionado
                            name: name
                        }
                    ]
                )
                setName(''); // limpa o campo de input
                /*
                artists.push({
                    id: nextId++,
                    name: name
                });
            */
            }}> Add </button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </section>
    );
}