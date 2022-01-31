import React from "react"
import { Button } from "../../styled/Button"
import { Item, List } from "../../styled/List"
import { deleteContact } from "../../app/actions"
import { useDispatch, useSelector } from "react-redux"

const Display = ({ contacts }) => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.contacts.filter)

  return (
    <List>
      {contacts
        .filter(({ name }) => (filter !== "" ? name.includes(filter) : true))
        .map(({ id, name, number }) => (
          <Item key={id}>
            <span>
              {name} {number}
            </span>
            <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
          </Item>
        ))}
    </List>
  )
}

export default Display
