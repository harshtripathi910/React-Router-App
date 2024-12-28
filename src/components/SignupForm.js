import React, { useState } from 'react'
import toast from 'react-hot-toast';

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = (props) => {
    let setIsLoggedIn = props.setIsLoggedIn;

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [kshowPassword, setkshowPassword] = useState(false);
    const navigate = useNavigate();
    const [accountType, setAccountType] = useState("student");



    function changeHadler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Password do not match");
            return;
        }

        setIsLoggedIn(true)
        toast.success("Account Created")
        const accountData = {
            ...formData
        };

        const finalData= {
            ...accountData,
            accountType
        }
        console.log("printing  final account data")
        console.log(finalData)
        navigate("/dashboard")

    }
    return (
        <div>
            <div
            className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button
                className={`${accountType==="student" 
                ?
                "bg-richblack-900 text-richblack-5"
                :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=> setAccountType("student")}
                >
                    Student
                </button>
                <button 
                 className={`${accountType==="instructor" 
                ?
                "bg-richblack-900 text-richblack-5"
                :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                
                
                onClick={()=> setAccountType("instructor")}>
                    Instructor
                </button>
            </div>
            <form onSubmit={submitHandler}>

                <div className='flex gap-x-4 justify-between mt-[10px]'>
                    <label >
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>First Name <sup className='text-red-500'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstname'
                            onChange={changeHadler}
                            placeholder='Enter First Name'
                            value={formData.firstname}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>Last Name <sup className='text-red-500'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastname'
                            onChange={changeHadler}
                            placeholder='Enter First Name'
                            value={formData.lastname}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>

                </div>

                <div className='mt-[20px]'>
                    <label className='w-full mt-[10px]'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375] mt-2'>Email Address<sup className='text-red-500'>*</sup></p>
                        <input
                            required
                            type='email'
                            name='email'
                            onChange={changeHadler}
                            placeholder='Enter Email Address'
                            value={formData.email}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>

                </div>



                <div className='flex  w-full gap-x-2 mt-[10px]'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>Create Password <sup className='text-red-500'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name='password'
                            onChange={changeHadler}
                            placeholder='Enter Password'
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span
                            className=' absolute right-3 top-[38px] cursor-pointer'

                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                                :
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>Confirm Password <sup className='text-red-500'>*</sup></p>
                        <input
                            required
                            type={kshowPassword ? ("text") : ("password")}
                            name='confirmPassword'
                            onChange={changeHadler}
                            placeholder='confirm Password'
                            value={formData.confirmPassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span
                            className=' absolute right-3 top-[38px] cursor-pointer '
                            onClick={() => setkshowPassword((prev) => !prev)}>
                            {kshowPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                                :
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>
                <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-[10px]'>
                    Create Account
                </button>

            </form>
        </div>
    )
}

export default SignupForm