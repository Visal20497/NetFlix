import React,{ useEffect } from 'react'
import { LOGO} from '../utils/Constant'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import {  useSelector,useDispatch  } from 'react-redux';
import {addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const user=useSelector((store)=>{
        return store.user
    })
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayName,photoURL} = user
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photo_URL:photoURL}))
            navigate("/browse");
          
          } else {
            dispatch(removeUser())
          }
        });
      }, [])
    const handleClick = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            navigate('/error')
        });
    }

    return (
        <div className='absolute  w-full px-8 py-2 flex justify-between bg-gradient-to-b from-black z-10'>
            <img className='w-44 '
                src={LOGO} alt="loading" />
           {user && <div className='flex p-2'>
                <img className='w-12 h-12'
                    alt="userIcon"
                    src={user?.photoURL} />
                <button onClick={handleClick} className='font-bold text-white'>(Sign In)</button>
            </div>}
        </div>
    )
}

export default Header