import {BtnVoltar,BtnProximo} from "../components/Button";

import TableOfContents from "../components/TableOfContents";
import Avatar from "../components/Avatar";
import Gallery from "../components/Gallery";
import Card from "../components/Card";
import TodoList from "../components/TodoList";
import PackingList from "../components/PackingList";
import List from "../components/List";
import SpicedChaiRecipe from "../components/Recipe";
import TeaSet from "../components/TeaSet";

import {Link} from "react-router-dom";
import './styleGeral.css';

export default function Atv03() {
  return (
    <>
        <h1>Atividade 3</h1>
        <section style={{
          margin: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: '0.3fr 0.5fr 0.5fr',
          gap: '20px'
        }}>
          <TableOfContents />
          <Card>
              {/*Card recebe children logo é possível passar vários elementos para ele*/}
              <div>
                <h1>Katherine Johnson</h1>
                <p>
                  Katherine Coleman Goble Johnson (August 26, 1918-February 24, 2020) was an American mathematician, physicist, and space scientist.
                </p>
              </div>
              <Avatar 
                  size={100}
                  person={{
                      name: 'Katherine Johnson',
                      imageId:'0S9jJQe'
                  }}
              />
          </Card>
          <Gallery />
          <TodoList />
          <PackingList />
          <TeaSet />
          <List />
          <SpicedChaiRecipe drinkers={4} />
        </section>
        <br/>
        <Link to="/"><BtnVoltar /></Link>
        <Link to="/Atv04"><BtnProximo /></Link>
    </>
  );
}