import { useState } from "react";
// imgs
import iconReset from '../img/reset-icon.png';
import iconAdd from '../img/add-icon.png';
import iconMinus from '../img/minus-icon.png';
import iconHomem from '../img/homem.png';
import iconMulher from '../img/mulher.png';
// CSS
import './Contador.css';

// const [ state, setState] = useState(initialState)
// por exemplo
// const [age, setAge] = useState(28)

// initialState ->  o valor inicial do estado. Em functions ele funciona como inicializador
// useState -> retorna um array com: o estado atual (no primeiro render, sera o valor passado pelo initialState)
                                  // a função set, que atualiza o estado para um novo valor e gera um re-render

function ContadorValorTotal({ valorTotal }) {
    return (
        <div><p className="caixa">{valorTotal}</p></div>
    );
}
function ContadorValor({ valor }) {
    return (
        <div><p className="caixa">{valor}</p></div>
    );
}

function ContadorBtnAdicionar({ onClick }) {
    return (
        <button onClick={onClick} className="icon-clickavel"><img src={iconAdd}/></button>
    );
}

function ContadorBtnRemover({ onClick }) {
    return (
        <button onClick={onClick} className="icon-clickavel"><img src={iconMinus}/></button>
    );
}

function ContadorPessoa( { genero, icon }) { // passando props da array pessoa    
    const [valor, setValor] = useState(0);

    // funções que serão triggered ao clicar nos botões
    // os componentes chamam eles pelo onClick
    const adicionar = () => setValor(v => v + 1);
    const remover = () => setValor(v => v > 0 ? v - 1 : 0);

    return (
        <div>
            <img src={icon} className="icon-pessoa"/>
            <div className="botoes">
                <ContadorBtnAdicionar onClick={adicionar}/>
                <ContadorBtnRemover onClick={remover}/> 
            </div>
            <p>{genero}</p>
            <ContadorValor valor={valor} />
        </div>
    );
}

function ContadorBtnReset() {
    return (
        <button className="icon-resetar"><img src={iconReset} id="reset"/></button>
    );
}

function ContadorTitulo() {
    return (
            <h1 id="total">Total</h1>
    );
}
function ContadorTabela() {
    // cria as colunas baseado na array pessoa
    // utiliza o map() para passar pelo array todo e criar uma funcao de retorno em cada elemento
    // nesse caso ele retorna o genero (Homens/Mulheres) e os icons
    return (
        <div id="tabela">
          {pessoa.map((p, index) => (
            <ContadorPessoa key={index} genero={p.genero} icon={p.icon} />
          ))}
        </div>
    )
}
export default function ContadorContainer() {
    return (
        <div id="conteudo">
            <ContadorBtnReset />
            <ContadorTitulo />
            <ContadorValorTotal />
            <ContadorTabela />
        </div>
    );
}

// Homens e Mulheres
const pessoa = [
    {genero: "Homens", icon: iconHomem}, // nota: sem {} pois nãoo queremos um object mas um path
    {genero: "Mulheres", icon: iconMulher}
];