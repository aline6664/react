import {BtnVoltar,BtnProximo} from "../components/Button";

import TableOfContents from "../components/TableOfContents";
import {Profile} from "../components/Gallery";
import Gallery from "../components/Gallery";
import TodoList from "../components/TodoList";
import Avatar from "../components/Avatar";

import {Link} from "react-router-dom";
import './styleGeral.css';

export default function Atv03() {
  return (
    <>
        <h1>Atividade 3</h1>
        <TableOfContents />
        <Profile />
        <Gallery />
        <TodoList />
        <Avatar />
        <br></br>
        <Link to="/"><BtnVoltar /></Link>
        <Link to="/Atv04"><BtnProximo /></Link>
    </>
  );
}