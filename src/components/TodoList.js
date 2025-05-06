import foto from '../img/Hedy_Lamarr.jpg';

export default function TodoList() {
    const name = "Hedy Lamarr";
    return (
        <>
            <h1>{name}'s Todos</h1>
            <img 
                src={foto}
                alt="Hedy Lamarr"
                className="photo"
                width="100px"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </>
    );
}