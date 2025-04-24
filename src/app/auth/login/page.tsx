import React from 'react'
import LoginForm from './_components/login-form'

export default function Login() {
  return (
    <div>
    {/* Title */}
      <h2 className="font-bold text-2xl mb-8">Sign in</h2>

    {/* Form */}
      <LoginForm/>
    </div>
  )
}
