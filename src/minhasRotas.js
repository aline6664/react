import {BrowserRouter, Route, Routes} from 'react-router-dom';
// buscando componentes da biblioteca react-router-dom
// classes complementares para especificar rotas

// <BrowserRouter> - container principal dos sistemas de rotas
// <Routes> - agrupa vários <Route/>
// <Route/> - define uma rota específica, associa um caminho (path) a um componente (element)
// path="/" - caminho

import Home from "./Home";
import Atv01 from "./Atv01";
import Atv02 from "./Atv02";
// import NOME DO COMPONENTE from "./DIRETORIO";

export default function MinhasRotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atv01" element={<Atv01 />} />
            <Route path="/atv02" element={<Atv02 />} />
        </Routes>
        </BrowserRouter>
    );
}
