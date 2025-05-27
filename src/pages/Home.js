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
                    <li>
                        <Link to="/Atv03">Atividade 3 - Componentes</Link>
                    </li>
                    <li>
                        <Link to="/Atv04">Atividade 4 - Estado de Componentes</Link>
                    </li>
                    <li>
                        <Link to="/Atv05">Atividade 5 - Estado de Componentes 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;