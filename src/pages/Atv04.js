import {BtnVoltar,BtnProximo} from "../components/ButtonNav";

import Button from "../components/atv04/Button"
import Toolbar from "../components/atv04/Toolbar";
import Signup from "../components/atv04/Signup";
import Gallery from "../components/atv04/Gallery";

import {Link} from "react-router-dom";
import './styleGeral.css';

export default function Atv04() {
return (
    <>
        <h1>Atividade 4</h1>
        <Button />
        <Toolbar 
            onPlayMovie={() => alert("Playing...")}
            onUploadImage={() => alert("Uploading...")}
        />
        <Signup />
        <Link to="/"><BtnVoltar /></Link>
        <Link to="/Atv05"><BtnProximo /></Link>
    </>
);
}