import { useSelector } from 'react-redux'
import Form from './Componets/Form/Form'
import Display from './Componets/Display/Display'
import Search from './Componets/Search/Search'

function App() {
  const contacts = useSelector((state) => state.contacts.items)

  const state = useSelector((state) => state)
  console.log('state', state)

  return (
    <div>
      <section>
        <h1>Phonebook</h1>
        <Form contacts={contacts} />
        <h2>Contacts</h2>
        <Search />
        <Display contacts={contacts} />
      </section>
    </div>
  )
}

export default App
