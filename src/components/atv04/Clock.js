import { useState, useEffect } from 'react';

export function useTime() {
    const [time, setTime] = useState(() => new Date());
    
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000); // atualizar a cada 1 segundo
        return () => clearInterval(id); // resetar o intervalo
    }, []);
    return time;
}

export default function Clock({ time }) {
    return (
        <>
            <h1>{time}</h1>
            <input />
        </>
    );
}