import React from 'react'
import { nanoid } from 'nanoid'

const Form = ({ setContacts, contacts }) => {

  const isContactInContacts = (contacts, newContactName) =>
    contacts.some(({ name }) => name === newContactName)

  const seveContact = (e) => {
    e.preventDefault()

    const {
      elements: { name, number },
    } = e.currentTarget

    if (isContactInContacts(contacts, name.value)) return

    setContacts((prevContacts) => [
      ...prevContacts,
      { id: nanoid(), name: name.value, number: number.value },
    ])


  }

  
  return (
    <form onSubmit={seveContact}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          required
          type='text'
          name='name'
          //   onChange={updateNameOrNumber}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
      <div>
        <label htmlFor='number'>Number</label>
        <input
          required
          type='tel'
          name='number'
          //   onChange={updateNameOrNumber}
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        />
      </div>
      <button>Add contact</button>
    </form>
  )
}

export default Form
