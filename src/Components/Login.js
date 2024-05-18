import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData, checkValidDataWithName } from '../utils/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { IMG_URL } from '../utils/Constant';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const email = useRef(null)
  const name = useRef(null)
  const password = useRef(null)
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm)
  }
  const handleClick = () => {
    const message = isSignInForm ? checkValidData(email.current.value, password.current.value) : checkValidDataWithName(email.current.value, password.current.value, name.current.value)
    setErrorMessage(message)
    if (message) return;
    if (!isSignInForm) {
      // this is for the signUp logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL:IMG_URL,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
            navigate("/browse")
          }).catch((error) => {
            setErrorMessage(error.message)
          });
          // console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
          // ..
        });
    }
    else {
      // this is for the sign logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user)
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
    }
  }
  return (
    <div >
      <Header />
      <div className='absolute'>
        <img className=""
          src='https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg'></img>
      </div>
      <form onSubmit={(e) => { e.preventDefault() }} className='w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 absolute text-white bg-opacity-70 rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          ref={name}
          type='text' placeholder='Full Name'
          className='p-2 my-2 w-full bg-gray-700 rounded' />}
        <input type='text' ref={email}
          placeholder='Email or Mobile Number'
          className='p-2 my-2 w-full bg-gray-700 rounded' />
        <input type='password' ref={password}
          placeholder='Password'
          className='p-2 my-2 w-full bg-gray-700 rounded' />
        <p className='text-red-500 py-4 font-bold text-lg'>
          {errorMessage}
        </p>
        <button className='bg-red-700 p-4 my-4 w-full rounded'
          onClick={handleClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer'
          onClick={toggleSignIn}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered user? Sign In Now."}
        </p>

      </form>
    </div>
  )
}

export default Login