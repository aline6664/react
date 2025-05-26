import { useState } from 'react';
import './Counter.css';

let initialCounters = [
    0, 0, 0
];

export default function CounterList() {
    const [counters, setCounters] = useState(
        initialCounters
    );

    function handleIncrementClick(index) {
        const nextCounters = counters.map((c, i) => {
        if (i === index) {
            // Incrementa o counter clicado
            return c + 1;
        } else {
            // outros contadores permanecem igual
            return c;
        }
        });
        setCounters(nextCounters);
    }

    return (
        <ul className="counter">
        {counters.map((counter, i) => (
            // cria um contador para cada item na array (ou seja, 3 contadores)
            <li key={i}>
            {counter}
            <button onClick={() => {
                handleIncrementClick(i);
            }}>+1</button>
            </li>
        ))}
        </ul>
    );
}
