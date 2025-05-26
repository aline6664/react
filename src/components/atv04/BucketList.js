import { useState } from 'react';
import './BucketList.css'

let nextId = 3;
const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
];

function ItemList({ artworks, onToggle }) {
    return (
        <ul>
        {artworks.map(artwork => (
            <li key={artwork.id}>
            <label>
                <input
                    type="checkbox"
                    checked={artwork.seen} // true ou false
                    onChange={e => {
                        onToggle(
                        artwork.id,
                        e.target.checked
                        );
                    }}
                />
                {artwork.title}
            </label>
            </li>
        ))}
        </ul>
    );
}

export default function BucketList() {
    // duas listas diferentes mas que possuem mesmo valor inicial
    // eles tambem possuem funcoes diferentes para seu funcionamento
    // mas que ainda sao marcadas juntas, tendo seu estado compartilhado e afetando uma a outra
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(initialList);

    function handleToggleMyList(artworkId, nextSeen) {
        /*
        const myNextList = [...myList];
        const artwork = myNextList.find(
            a => a.id === artworkId
        );
        artwork.seen = nextSeen; // <- problema aqui: muta um item existente
        setMyList(myNextList);
        */

       setMyList(myList.map(artwork => {
            if (artwork.id === artworkId) {
                // cria um novo objeto com as mudancas
                return {...artwork, seen: nextSeen};
            }
            else {
                // caso contrario, nao muda
                return artwork;
            }
        }));
    }

    function handleToggleYourList(artworkId, nextSeen) {
        /*
        const yourNextList = [...yourList];
        const artwork = yourNextList.find(
            a => a.id === artworkId
        );
        artwork.seen = nextSeen; // <- problema: mesmo anterior
        setYourList(yourNextList);
        */
       setYourList(yourList.map(artwork => {
            if (artwork.id === artworkId) {
                // cria um novo objeto com as mudancas
                return {...artwork, seen: nextSeen};
            }
            else {
                // caso contrario, nao muda
                return artwork;
            }
        }));
    }

    return (
        <section className="bucket-list">
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList
                artworks={myList}
                onToggle={handleToggleMyList}
            />
            <h2>Your list of art to see:</h2>
            <ItemList
                artworks={yourList}
                onToggle={handleToggleYourList}
            />
        </section>
    );
}
