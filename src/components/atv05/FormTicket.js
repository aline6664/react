import { useState } from 'react';

export default function FormTicket() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [fullName, setFullName] = useState('');

  // calcula o fullName através dos estados
  // evita a repetição abaixo
  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value); // insere o input
    // setFullName(e.target.value + ' ' + lastName); // concatena o input com o sobrenome
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value); // insere o input
    // setFullName(firstName + ' ' + e.target.value); // concatena o input com o nome
  }

  return (
    <section style={{
      backgroundColor: '#cdcdcb',
      width: '400px',
      padding: '5px 0 5px 15px',
      marginTop: '20px'
    }}>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </section>
  );
}
