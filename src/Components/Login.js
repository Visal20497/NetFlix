import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  function toggleSignIn() {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div >
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg'></img>
      </div>
      <form className='w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 absolute text-white bg-opacity-70 rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
       { !isSignInForm && <input type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700 rounded' />}
        <input type='text' placeholder='Email or Mobile Number' className='p-2 my-2 w-full bg-gray-700 rounded' />
        <input type='password' placeholder='Password' className='p-2 my-2 w-full bg-gray-700 rounded' />
        <button className='bg-red-700 p-4 my-4 w-full rounded'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered user? Sign In Now."}</p>

      </form>
    </div>
  )
}

export default Login