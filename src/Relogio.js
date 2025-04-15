import { useEffect, useState } from 'react';
import './Relogio.css';

function Relogio() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
  
    useEffect(() => {
      const intervalo = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
  
      return () => clearInterval(intervalo); // limpeza do intervalo
    }, []);
  
    return (
      <>
        <h1 id="relogio">{hora}</h1>
      </>
    );
}

export default Relogio;
