export default function Button() {
    function handleClick() {
        alert("You clicked me!");
    }
    return (
        <>
        {/* Sem () pois a função está sendo PASSADA em vez de chamada */}
            <button onClick={handleClick}>
                Click me
            </button>

            <button onClick={function handleClick2() {
                alert("You also clicked me!");
            }}>
                Click me too
            </button>

            <button onClick={() => {
                alert("You clicked on me as well!");
            }}>
                Click on me as well
            </button>
        </>
    );
}