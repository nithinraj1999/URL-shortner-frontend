import React from 'react'
import Button from '../components/common/Button'
import InputField from '../components/common/InputField'
import { useState } from 'react'
import { signup } from '../services/api'

const Signup = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = signup(formData)
        
      };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow-md rounded-md w-96"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>

      <div className="mb-4">
        <InputField
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          name="name"
          width="w-full"
          height="h-10"
        />
      </div>

      <div className="mb-4">
        <InputField
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          width="w-full"
          height="h-10"
        />
      </div>

      <div className="mb-4">
        <InputField
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          width="w-full"
          height="h-10"
        />
      </div>

      <Button
        label="Signup"
        color="bg-blue-500 text-white"
        width="w-full"
        height="h-10"
      />
    </form>
  </div>

  )
}

export default Signup
