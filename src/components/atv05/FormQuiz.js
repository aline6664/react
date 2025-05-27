import { useState } from 'react';
import './FormQuiz.css'

export default function FormQuiz() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null); // erro retornado do try/catch
    const [status, setStatus] = useState('typing'); // typing, success, submitting

    if (status === 'sucess') {
        return <h1>That's right!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault(); // impede do formulário resetar ao envio
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        }
        catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value); // pega o input inserido pelo usuário
    }

    return (
        <section className="form-quiz">
            <h2>City Quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    placeholder='Type your answer...'
                    disabled={status === 'submitting'} // true ou false
                />
                <br />
                <button disabled={ // true ou false
                    answer.length === 0 || // se não houver resposta
                    status === 'submitting' // ou estiver enviando
                }>
                    Submit
                </button>
                {error !== null && // se houver erro, mostrar
                    <p className="error">
                        {error.message}
                    </p>}
            </form>
        </section>
    );
}

function submitForm(answer) {
    // promise -> usado em funções assíncronas, "promete um resultado"
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if (shouldError) {
                reject(new Error('Try again!')); // se falha ou erro
            }
            else {
                resolve(); // se sucesso
            }
        }, 1500);
    });
}