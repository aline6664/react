import {BtnVoltar,BtnProximo} from "../components/ButtonNav";

import Toolbar from "../components/atv04/Toolbar";
import Gallery from "../components/atv04/Gallery";
import Form from "../components/atv04/Form";
import Counter from "../components/atv04/Counter";
import MovingDot from "../components/atv04/MovingDot";
import Form2 from "../components/atv04/Form2";
import Form3 from "../components/atv04/Form3";
import List from "../components/atv04/List";
import List2 from "../components/atv04/List2";
import ShapeEditor from "../components/atv04/ShapeEditor";
import CounterList from "../components/atv04/CounterList";
import List3 from "../components/atv04/List3";
import List4 from "../components/atv04/List4";
import BucketList from "../components/atv04/BucketList";

import {Link} from "react-router-dom";

export default function Atv04() {
    return (
        <>
            <section style={{
                margin: '20px'
            }}>
                <h1>Atividade 4</h1>
                <Toolbar 
                    onPlayMovie={() => alert("Playing...")}
                    onUploadImage={() => alert("Uploading...")}
                />
                <Gallery />
                <Counter />
                <section className="forms">
                    <Form />
                    <Form2 />
                    <Form3 />
                </section>
                <section className="lists">
                    <List />
                    <List2 />
                    <List3 />
                    <List4 />
                </section>
                <CounterList />
                <BucketList />
                <ShapeEditor />
                <MovingDot />
            </section>
            <Link to="/"><BtnVoltar /></Link>
            <Link to="/Atv05"><BtnProximo /></Link>
        </>
    );
}