import React, { useState } from 'react'

const initialState = { name: '', password: '' }

export default function Form() {
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
        <Input
          type='name'
          value={formState.name}
          placeholder='Name'
          handleChange={handleChange}
          name='name'
        />
        <Input
          type='password'
          value={formState.password}
          placeholder='Password'
          handleChange={handleChange}
          name='password'
        />
        <Button>Submit</Button>
      </form>
    </div>
  )
}

function Button(props) {
  const { children } = props
  return <button type='submit'>{children}</button>
}

function Input(props) {
  const { type, name, handleChange, placeholder, value } = props

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      name={name}
    />
  )
}
