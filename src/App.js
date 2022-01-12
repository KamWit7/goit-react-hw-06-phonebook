import './App.css'
import { useState } from 'react'
import Form from './Componets/Form/Form'
import Display from './Componets/Display/Display'
import Search from './Componets/Search/Search'

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-22', name: 'hermione kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ])

  const [filter, setFilter] = useState('')

  return (
    <div>
      <section>
        <h1>Phonebook</h1>
        <Form setContacts={setContacts} contacts={contacts} />
        <h2>Contacts</h2>
        <Search setFilter={setFilter} />
        <Display
          contacts={contacts}
          filter={filter}
          setContacts={setContacts}
        />
      </section>
    </div>
  )
}

export default App
