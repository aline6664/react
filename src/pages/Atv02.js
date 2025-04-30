import Contador from "../components/Contador";
import {BtnVoltar,BtnProximo} from "../components/Button";
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