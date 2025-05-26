import { useState } from 'react';

let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ShapeEditor() {
    const [shapes, setShapes] = useState(
        initialShapes
    );

    function handleClick() {
        const nextShapes = shapes.map(shape => {
        if (shape.type === 'square') {
            // não muda se for um quadrado
            return shape;
        } else {
            // retorne um círculo movido 50px para baixo
            return {
            ...shape,
            y: shape.y + 50,
            };
        }
        });
        // re-renderiza com o novo array armazenado no nextShapes
        setShapes(nextShapes);
    }

    return (
        <section
            style={{
                position: 'relative',
                height: '400px',
                width: '400px',
                marginBottom: '20px'
            }}
            >
            <button onClick={handleClick}>
                Move circles down!
            </button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                    background: 'purple',
                    position: 'absolute',
                    left: shape.x,
                    top: shape.y,
                    borderRadius:
                        shape.type === 'circle' // arrendondando os circulos
                        ? '50%' : '',
                    width: 20,
                    height: 20,
                    }}
                />
            ))}
        </section>
    );
}
