import { useState } from 'react';
import './Counter.css'

export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>Counter</h1>
            <div className="counter">
                <h2>{number}</h2>
                <button onClick={() => {
                    /*
                    setNumber(number + 1);
                    setNumber(number + 1);
                    setNumber(number + 1);
                    
                    setNumber(number + 5);
                    setTimeout(() => {
                        alert(number);
                    }, 3000)
                    
                    setNumber(number + 5);
                    setNumber(n => n + 1);
                    setNumber(42);
                    */
                    setNumber(n => n + 1);
                    setNumber(n => n + 1);
                    setNumber(n => n + 1);
                }}
                >
                    +3
                </button>
            </div>
        </>
    );
}