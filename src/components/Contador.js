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

function ContadorPessoa( { genero, icon, valor, mudarValor }) { // passando props da array pessoa   
    // funções que serão triggered ao clicar nos botões
    // os componentes chamam eles pelo onClick 
    const adicionar = () => mudarValor(valor + 1); // mudarValor() chama atualizarValor(index, novo)
    const remover = () => mudarValor(valor > 0 ? valor - 1 : 0); // ou seja, ele pede para o pai atualizar o state
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

function ContadorBtnReset({ onClick }) {
    return (
        <button onClick={onClick} className="icon-resetar">
            <img src={iconReset} id="reset"/>
        </button>
    );
}

function ContadorTitulo() {
    return (
        <h1 id="total">Total</h1>
    );
}
function ContadorTabela( {valores, atualizarValor}) {
    // cria as colunas baseado na array pessoa (index 0 - homens, 1 - mulheres)
    // utiliza o map() para passar pelo array todo e criar uma funcao de retorno em cada elemento
    // nesse caso ele retorna o genero (Homens/Mulheres) e os icons
    // tambem esta passando o valor e o valor atualizado recebido como props pelo ContadorContainer
    return (
        <div id="tabela">
          {pessoa.map((p, index) => (
            <ContadorPessoa
                key={index}
                genero={p.genero}
                icon={p.icon}
                valor={valores[index]} // valores para cada genero
                mudarValor={(novoValor) => atualizarValor(index, novoValor)} // para atualizar o valor desse index
            />
          ))}
        </div>
    )
}
export default function ContadorContainer() {
    const [valores, setValores] = useState([0, 0]); // array que vale para cada gênero

    // funcao para atualizar valor de um genero especifico
    // index 0 - homens, 1 - mulheres
    // map() cria um novo array com o novo valor do index que foi mudado, deixando o outro inalterado
    const atualizarValor = (index, novoValor) => {
        setValores(valores.map((valor, i) => i === index ? novoValor : valor));
    };

    // calcula a soma de todos elementos no array valores
    // reduce() passa pelo array todo e realiza a funcao especificada
    // nesse caso, realiza soma de cada elemento, comecando pelo index 0
    const total = valores.reduce((a, b) => a + b, 0);

    const resetar = () => setValores([0, 0]);

    return (
        <div id="conteudo">
            <ContadorBtnReset onClick={resetar} />
            <ContadorTitulo />
            <ContadorValorTotal valorTotal={total}/>
            <ContadorTabela 
                valores={valores}
                atualizarValor={atualizarValor}
            />
        </div>
    );
}

// Homens e Mulheres
const pessoa = [
    {genero: "Homens", icon: iconHomem}, // nota: sem {} pois não queremos um object mas um path
    {genero: "Mulheres", icon: iconMulher}
];