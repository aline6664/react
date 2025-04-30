import Relogio from "../components/Relogio";
import Letreiro from "../components/Letreiro";
import {BtnVoltar,BtnProximo} from "../components/Button";
import {Link} from "react-router-dom";

export default function Atv01() {
  return (
    <>
        <h1>Atividade 1</h1>
        <Relogio />
        <Letreiro />
        <br></br>
        <Link to="/"><BtnVoltar /></Link>
        <Link to="/Atv02"><BtnProximo /></Link>
    </>
  );
}

