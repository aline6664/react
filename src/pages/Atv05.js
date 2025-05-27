import FormQuiz from "../components/atv05/FormQuiz";
import FormTicket from "../components/atv05/FormTicket";
import Accordion from "../components/atv05/Accordion";
import Messenger from "../components/atv05/Messenger";

import {BtnVoltar,BtnProximo} from "../components/ButtonNav";
import {Link} from "react-router-dom";

export default function Atv05() {
  return (
    <section style={{
        margin: '20px'
    }}>
        <h1>Atividade 5</h1>
        <FormQuiz />
        <FormTicket />
        <Accordion />
        <Messenger />
        <br></br>
        <Link to="/"><BtnVoltar /></Link>
        <Link to="/Atv06"><BtnProximo /></Link>
    </section>
  );
}