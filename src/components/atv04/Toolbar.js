import './Toolbar.css';
/*
function AlertButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    )
}
*/
function Button({ onSmash, children }) {
    return (
        <button onClick={e => {
            {/* Evita que o click ative o componente pai (propagação interrompida) */}
            e.stopPropagation();
            onSmash();
        }}>
            {children}
        </button>
    );
}

/*
function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`);
    }

    return (
        <Button onSmash={handlePlayClick}>
            Play "{movieName}"
        </Button>
    );
}

function UploadButton() {
    return(
        <Button onSmash={() => alert("Uploading!")}>
            Upload Image
        </Button>
    );
}

export default function Toolbar() {
    return (
        <div>
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
        </div>
    );
}
*/

export default function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
        <div className="toolbar" onClick={() => {
            alert("You clicked on the toolbar!");
        }}>
            <Button onSmash={onPlayMovie}>
                Play Movie
            </Button>
            <Button onSmash={onUploadImage}>
                Upload Image
            </Button>
        </div>
    );
}