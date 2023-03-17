import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!name || !email) return
    setUser({ name: name, email: email })
    navigate('/dashboard')
    console.log(`user ${name}, ${email}`)
  }

  return (
    <section className="section">
      <h5>Login</h5>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-block">
          login
        </button>
      </form>
    </section>
  )
}

export default Login
