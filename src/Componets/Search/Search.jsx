import React from 'react'
import { useDispatch } from 'react-redux'
import { changeFilter } from './../../app/actions'

const Search = () => {
  const dispatch = useDispatch()

  return (
    <>
      <label htmlFor='filter'>Find contacts by name </label>
      <input
        required
        type='text'
        name='filter'
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title='Please give me a name.'
      />
    </>
  )
}

export default Search
