import AuthForm from '@/components/forms/AuthForm'
import React from 'react'

const SignUp = () => {
  return (
   <div className='relative flex flex-col m-6 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
        <AuthForm type="sign-up" />
    </div>
  )
}

export default SignUp
