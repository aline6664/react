import foto from '../img/Katherine_Johnson.jpg';
import './Gallery.css';

export function Profile() {
    return (
        <img
            className="foto"
            src={foto}
            alt="Katherine Johnson"
        />
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}