import { useState } from 'react';

function sendMessage(message) {
    return <p>{message}</p>
}

export default function Form() {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hi!');

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 5000);
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
            To: {' '}
        </label>
        <select
            value={to}
            onChange={e => setTo(e.target.value)}>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
            </select>
        <textarea
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
        </form>
    );
}