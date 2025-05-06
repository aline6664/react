import './Button.css';

function BtnVoltar() {
    return (
        <button className="nav">Voltar ao Home</button>
    );
}

function BtnProximo() {
    return (
        <button className="nav">Próxima atividade</button>
    );
}

export {
    BtnVoltar,
    BtnProximo,
}