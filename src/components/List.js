import './List.css';
import Avatar from './Avatar.js';

const people = [{
    id: 0,
    name: 'Cleola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'calculating rocket trajectories',
    imageId: '0S9jJQe',
}, {
    id: 1,
    name:'Mario José Molina-Pasquel Henríquuez',
    profession: 'chemist',
    accomplishment: 'discovering the Arctic ozone hole',
    imageId: '89vTcfD',
}, {
    id: 2,
    name:'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'contributions to electromagtism theory',
    imageId: 'zeSPZGK',
}, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids',
    imageId: '3J5Lqyr',
}, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf stars mass calculations',
    imageId: 'iRWtEff',
}];

/*
const chemists = people.filter(person =>
    person.profession === 'chemist'
);
*/

export default function List() {
    const listItems = people.map(person =>
        <li key={person.id}>
            <Avatar
                person = {{
                    name: person.name,
                    imageId: person.imageId,
                }}
                size={100}
            />
            <p className="pessoaDescricao">
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );

    return <ul className="listaPessoas">{listItems}</ul>
    /* não necessita de return pois esta implicito, porem é necessário caso a
        expressão possua {} logo após => */

    /*
    Retorna <ul>
                <li> nome1 </li>
                <li> nome2 </li>
                ...
                <li> nomeN </li>
              </ul>

    
    const listItems = chemists.map(person =>
        <li key={person.id}>
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
        return <ul>{listItems}</ul>;
    */    
}