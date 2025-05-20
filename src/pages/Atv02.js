import Contador from "../components/atv02/Contador";
import {BtnVoltar,BtnProximo} from "../components/ButtonNav";
import {Link} from "react-router-dom";
import './styleGeral.css';

export default function Atv02() {
  return (
    <>
        <h1>Atividade 2</h1>
        <Contador />
        <br></br>
        <Link to="/"><BtnVoltar /></Link>
        <Link to="/Atv03"><BtnProximo /></Link>
    </>
  );
}