import React from 'react'
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })
    
    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }


    return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Sign Up <span className='text-blue-500'>ChatApp</span>
    </h1>

    <form onSubmit={handleSubmit} >
        {/* FullName */}
        <div>
            <label className='label p-2'>
                <span className='text-base text-gray-100 label-text'>Full Name</span>
            </label>
            <input type="text" placeholder='John Deo' className='w-full input input-bordered h-10 bg-black text-white' 
                value={inputs.fullName}
                onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />
        </div>

        {/* Username */}
        <div>
            <label className='label p-2'>
                <span className='text-base text-gray-100 label-text'>Username</span>
            </label>
            <input type="text" placeholder='johndeo' className='w-full input input-bordered h-10 bg-black text-white' 
                 value={inputs.username}
                 onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
        </div>

        {/* Password */}
        <div>
            <label className='label p-2'>
                <span className='text-base text-gray-100 label-text'>Password</span>
            </label>
            <input type="password" placeholder='Password' className='w-full input input-bordered h-10 bg-black text-white' 
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
        </div>

        <div>
            <label className='label p-2'>
                <span className='text-base text-gray-100 label-text'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10 bg-black text-white' 
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
        </div>

        <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
        {/* {GENDER CHECKBOX GOES HERE} */}
        
        <Link to={"/login"} className='text-white text-sm hover:underline hover:text-grey-200 mt-2 inline-block'>
                Already have an account
        </Link>

        <div className='align-middle text-center mt-5'>
            <button className='btn btn-block btn-sm w-20 ' disabled={loading}>
                {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
        </div>
    </form>
    </div>
    </div>
  )
}

// STATER CODE FOR THE SIGNUP
// const SignUp = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//               <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                   Sign Up <span className='text-blue-500'>ChatApp</span>
//               </h1>
  
//               <form action="">
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base text-gray-100 label-text'>Full Name</span>
//                       </label>
//                       <input type="text" placeholder='John Deo' className='w-full input input-bordered h-10 bg-black text-white' />
//                   </div>
  
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base text-gray-100 label-text'>Username</span>
//                       </label>
//                       <input type="text" placeholder='johndeo' className='w-full input input-bordered h-10 bg-black text-white' />
//                   </div>
  
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base text-gray-100 label-text'>Password</span>
//                       </label>
//                       <input type="password" placeholder='Password' className='w-full input input-bordered h-10 bg-black text-white' />
//                   </div>
  
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base text-gray-100 label-text'>Confirm Password</span>
//                       </label>
//                       <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10 bg-black text-white' />
//                   </div>
  
//                   <GenderCheckbox />
//                   {/* {GENDER CHECKBOX GOES HERE} */}
                  
//                   <a href="#" className='text-white text-sm hover:underline hover:text-grey-200 mt-2 inline-block'>
//                          Already have an account
//                   </a>
  
//                   <div className='align-middle text-center mt-5'>
//                       <button className='btn btn-block btn-sm w-20 '>Sign Up</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//     )
//   }
export default SignUp