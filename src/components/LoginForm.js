import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";
import toast from 'react-hot-toast';

const LoginForm = (props) => {
    let setIsLoggedIn=props.setIsLoggedIn;
    const [formData, setFormData] = useState({
        email: "", password: ""
    })
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard")
    }

    return (
        <form onSubmit={submitHandler}
        className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>
                    Email Address<sup className='text-red-700'>*</sup>
                </p>
                <input
                    required
                    type='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter your mail'
                    name='email'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                />
            </label>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>
                    Password<sup className='text-red-700'>*</sup>
                </p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    name='password'
                     className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                />

                <span 
                 className=' absolute right-3 top-[38px] cursor-pointer'
                
                onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? 
                    (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>)
                     : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to="#">
                    <p className='text-blue-100 text-xs mt-1 max-w-max ml-auto'>
                        Forget Password
                    </p>
                </Link>
            </label>

            <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
               Sign in

            </button>

        </form>
    )
}

export default LoginForm