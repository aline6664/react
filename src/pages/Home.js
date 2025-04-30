// Classe Home - Componente de Interface

import React from 'react';
import {Link} from 'react-router-dom';
// buscando a classe Link do arquivo react-router-dom
import './styleGeral.css';

const Home = () => { // arrow function
    // similar a "function Home"
    return (
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Atividade 1 - Relógio e Letreiro</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Atividade 2 - Contador de Pessoas</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;