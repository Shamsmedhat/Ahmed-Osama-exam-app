import ForgotPasswordForm from './_components/forgotpassword-form';

export default function ForgotPassword() {
  return (
    <div className='my-8 mx-auto'>
      {/* Title */}
      <h2 className='py-3 text-2xl font-bold'>Forgot your password?</h2>

      {/* Form */}
      <ForgotPasswordForm />
    </div>
  )
}
