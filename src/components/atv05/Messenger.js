import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <section style={{
        display: 'flex',
        marginTop: '20px'
    }}>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      {/* se o "key" for diferente, entende-se que o destinatário é
      outro, logo recria um novo componente de bate-papo do zero, evitando
      que a mensagem permaneça se o destinatário for trocado (campo de entrada redefinido)*/}
      <Chat key={to.email} contact={to} />
    </section>
  );
}