export default function Signup() {
    return (
        <form onSubmit={e => {
            {/* Evita que a página recarregue após o envio do form (evento padrão) */}
            e.preventDefault();
            alert('Submitting...')
        }}>
            <input />
            <button>Send</button>
        </form>
    );
}