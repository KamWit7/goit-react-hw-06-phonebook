import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from '../../app/actions'
import { Button } from '../../styled/Button'

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
            <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
          </li>
        ))}
    </ul>
  )
}

export default Display
