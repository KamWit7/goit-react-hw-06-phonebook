import React from 'react'

const Display = ({ contacts, filter, setContacts }) => {
  const removeUser = (removeId) => {
    setContacts((prevContacts) =>
      prevContacts.filter(({ id }) => id !== removeId)
    )
  }

  return (
    <ul>
      {contacts
        .filter(({ name }) => (filter !== '' ? name.includes(filter) : true))
        .map(({ id, name, number }) => (
          <li key={id}>
            <span>
              {name} {number}
            </span>
            <button onClick={() => removeUser(id)}>Delete</button>
          </li>
        ))}
    </ul>
  )
}

export default Display
