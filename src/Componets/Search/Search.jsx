import React from 'react'

const Search = ({ setFilter }) => {
  return (
    <>
      <label htmlFor='filter'>Find contacts by name </label>
      <input
        required
        type='text'
        name='filter'
        onChange={(e) => setFilter(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title='Please give me a name.'
      />
    </>
  )
}

export default Search
