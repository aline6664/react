import {BtnVoltar,BtnProximo} from "../components/ButtonNav";

import Button from "../components/atv04/Button"
import Toolbar from "../components/atv04/Toolbar";
import Signup from "../components/atv04/Signup";
import Gallery from "../components/atv04/Gallery";
import GallerySimple from "../components/atv04/GallerySimple";
import Clock, { useTime } from "../components/atv04/Clock";
import Form from "../components/atv04/Form";
import Counter from "../components/atv04/Counter";

import {Link} from "react-router-dom";

export default function Atv04() {
    const time = useTime();
    return (
        <>
            <h1>Atividade 4</h1>
            <Button />
            <Toolbar 
                onPlayMovie={() => alert("Playing...")}
                onUploadImage={() => alert("Uploading...")}
            />
            <Signup />
            <Gallery />
            <GallerySimple />
            <Clock time={time.toLocaleTimeString()}/>
            <Form />
            <Counter />
            <Link to="/"><BtnVoltar /></Link>
            <Link to="/Atv05"><BtnProximo /></Link>
        </>
    );
}