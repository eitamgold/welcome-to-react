import React from 'react'

const Nav = ({search, setSearch}) => {
  return (
    <nav noValidate className='nav' onSubmit={(e) => {e.preventDefault()}}>
        <input
          className='nav-input'
          type="text"
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
    </nav>
  )
}

export default Nav