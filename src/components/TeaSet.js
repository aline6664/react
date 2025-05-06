import './TeaSet.css';

function Cup({ guest}) {
    return <h2>Tea cup for guest #{guest} 🍵</h2>
}

export default function TeaSet() {
    let cups = []
    for (let i = 1; i <= 5; i++) {
        cups.push(<Cup guest={i} key={i} />)
    }
    return (
        <section className="teaSet">
            {cups}
        </section>
    )
}