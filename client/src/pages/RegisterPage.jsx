import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

// register page
const RegisterPage = () => {

    const [password, setPassword] = useState(true);

    return (
    <>
        <section
        className="flex flex-col items-center justify-center contentChild"
        >
            <div 
            className="border-black border-3 p-5 w-[300px] md:w-[450px] xs:w-[500px] flex flex-col gap-10"
            >
                <h1
                className="text-[30px] text-center font-bold"
                >Registration</h1>
                <form 
                action="#"
                method="#"
                className="flex flex-col gap-3"
                >
                    {/* username */}
                   <div>
                        <label 
                        htmlFor="name"
                        className="text-[18px]"
                        >Username:</label>
                        <div
                        className="border-black border-2 text-[18px] py-1 px-2"
                        >
                            <input 
                            type="text" 
                            name="name" 
                            id="name"
                            placeholder="enter username" 
                            className="outline-none border-none w-[100%]"
                            />
                        </div>
                   </div>
                    {/* email */}
                    <div>
                        <label 
                        htmlFor="email"
                        className="text-[18px]"
                        >Email address:</label>
                        <div
                        className="border-black border-2 text-[18px] py-1 px-2"
                        >
                            <input 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="enter email address" 
                            className="outline-none border-none w-[100%]"
                            />
                        </div>
                    </div>
                    {/* password */}
                    <div>
                        <label 
                        htmlFor="password"
                        className="text-[18px]"
                        >Password:</label>
                        <div
                        className="border-black border-2 text-[18px] py-1 px-2 flex justify-between items-center"
                        >
                            <input 
                            type={password?"password":"text"}
                            name="password" 
                            id="password"
                            placeholder="enter password" 
                            className="outline-none border-none w-[100%]"
                            />
                            {
                                password?
                                <FaEyeSlash
                                className="text-[20px] cursor-pointer"
                                onClick={()=>setPassword(false)}
                                />
                                : <FaEye
                                className="text-[20px] cursor-pointer"
                                onClick={()=>setPassword(true)}
                                />
                            }
                        </div>
                    </div>
                    {/* submit */}
                    <div
                    className="bg-black text-white text-center py-2 cursor-pointer text-[18px] hover:rounded-2xl transition-all duration-200"
                    >
                        <button 
                        type="submit"
                        >
                            Register
                        </button>
                    </div>
            </form>
            </div>
        </section>
    </>
    )
}

export default RegisterPage;