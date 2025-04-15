import { useEffect, useState } from 'react';
import './Letreiro.css';

function MeuTexto({digitado}) {
    return <><h1>{digitado}</h1></>
}

function Letreiro() {
    const textoCompleto = "Conheça a Fatec!";
    const [textoDigitado, setDigitado] = useState("");
    const [i, setIndex] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            // Enquanto não atingir o final da frase, digitar
            if (i <= textoCompleto.length) {
                setDigitado(textoCompleto.slice(0, i));
                setIndex((prev) => prev + 1);
            }
            // Se chegar ao final, realizar o looping
            // Reseta o texto digitado e o índice
            else {
                setTimeout(() => {
                setDigitado("");
                setIndex(0);
            }, 1000); // 1 segundo de pausa antes de recomeçar
            }
        }, 200); // 0.2s por letra
    
        return () => clearInterval(intervalo); // limpeza do intervalo a cada re-render
      }, [i]);

    return(
        <>
            <MeuTexto digitado = {textoDigitado}/>
        </>
    );
}

export default Letreiro;