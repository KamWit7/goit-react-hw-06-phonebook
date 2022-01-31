import { useSelector } from 'react-redux'
import { Title } from './styled/Title'
import { Section } from './styled/Section'
import Form from './Componets/Form/Form'
import Search from './Componets/Search/Search'
import Display from './Componets/Display/Display'
import { useEffect } from 'react'

function App() {
  const contacts = useSelector((state) => state.contacts.items)

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  console.log('contacts', contacts)

  return (
    <Section>
      <Title>Phonebook</Title>
      <Form contacts={contacts} />

      <Title as='h2'>Contacts</Title>
      <Search />
      <Display contacts={contacts} />
    </Section>
  )
}

export default App
