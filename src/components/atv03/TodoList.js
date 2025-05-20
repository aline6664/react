import Avatar from "./Avatar";
import './TodoList.css';

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

export default function TodoList() {
    return (
        <div className="toDoList" style={person.theme}>
            <h1>{person.name}'s Todos for {formatDate(today)}</h1>
            <Avatar
                size={100}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId:'gHPMVje'
                }}
            />
            <ul style={{
                color: 'hotpink'
            }}>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}