function Image() {
    return (
        <img 
            src="https://i.imgur.com/ZF6s192.jpg"
            alt="'Floralis Genérica' by Eduardo Catalano"
        />
    );
}

export default function Gallery2() {
    return (
        <section>
            <h1>Inspiring Sculptures</h1>
            <Image />
            <Image />
            <Image />
        </section>
    );
}