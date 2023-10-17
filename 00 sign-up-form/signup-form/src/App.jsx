import { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: true
  })

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(formData.password === formData.passwordConfirm) {
      alert('Succesfully sign up')
    } else {
      alert('Password do not match')
    }

    if(formData.joinedNewsletter) {
      alert('Thanks for signing up for our newsletter!')
    }
  }

  return (
    <div className="form-container" >
      <form className="form" onSubmit={handleSubmit} >
        <input type="email" placeholder="Email address" className="form-input" onChange={handleChange} value={formData.email} name='email'  />

        <input type="password" placeholder='password' className='form-input' onChange={handleChange} value={formData.password} name='password'/>

        <input type="password" placeholder='Confirm password' className='form-input' onChange={handleChange} value={formData.passwordConfirm} name='passwordConfirm'  />

        <div className='form-marketing'>
          <input type="checkbox" onChange={handleChange} id='okayToEmail' checked={formData.joinedNewsletter} name='joinedNewsletter' />
          <label htmlFor="okayToEmail">I want join the newsletter</label>
        </div>
        <button className='form-submit'>Sign up</button>
      </form>
    </div>
  )
}

