import React from 'react'
import RegisterForm from './_components/register-form'

export default function Signup() {
  return (
    
      <div className='my-8   mx-auto'>
        {/* Title */}
        <h2 className='py-3 text-2xl font-bold'>Sign up</h2>

        {/* Form */}
        <RegisterForm />
      </div>
  )
}
