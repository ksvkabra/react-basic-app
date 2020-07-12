import React, { Component } from 'react'

const initialState = { name: '', password: '' }

class ClassForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initialState,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
    this.setState({ ...initialState })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='name'
            value={this.state.name}
            placeholder='Name'
            onChange={this.handleChange}
            name='name'
          />
          <input
            type='password'
            value={this.state.password}
            placeholder='Password'
            onChange={this.handleChange}
            name='password'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default ClassForm
