import foto from '../img/Gregorio_Y_Zara.jpg';

export default function Avatar() {
    const description = "Gregorio Y. Zara"
    return (
        <img
            className="avatar"
            src={foto}
            alt={description}
            width="100px"
        />
    );
}