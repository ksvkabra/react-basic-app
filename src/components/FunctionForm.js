import React, { useState } from 'react'

const initialState = { name: '', password: '' }

function FunctionForm() {
  const [formState, setFormState] = useState(initialState)

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formState)
    setFormState(initialState)
  }

  function handleChange(event) {
    const { name, value } = event.target
    const updatedState = { ...formState, [name]: value }
    setFormState(updatedState)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='name'
          value={formState.name}
          placeholder='Name'
          onChange={handleChange}
          name='name'
        />
        <input
          type='password'
          value={formState.password}
          placeholder='Password'
          onChange={handleChange}
          name='password'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FunctionForm
