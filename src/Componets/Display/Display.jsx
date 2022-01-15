import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from '../../app/actions'

const Display = ({ contacts }) => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.contacts.filter)

  return (
    <ul>
      {contacts
        .filter(({ name }) => (filter !== '' ? name.includes(filter) : true))
        .map(({ id, name, number }) => (
          <li key={id}>
            <span>
              {name} {number}
            </span>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        ))}
    </ul>
  )
}

export default Display
