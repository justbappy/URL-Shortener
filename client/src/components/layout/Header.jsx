import { NavLinks } from "../UI/NavLinks";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

// Header
export const Header = () => {

    const [mobileNav, setMobileNav] = useState(false);

    const navLinks = [
        "Home", "About", "Contact", "Login", "Register", "Logout"  
    ];

    // localStorage.setItem("user", "vishal");
    // localStorage.setItem("avatar", "")

    return (
    <>
    <header 
    className="flex justify-between items-center py-3 px-3 md:px-5"
    >
        {/* header brand name */}
        <div
        className="order-2"
        >
            <h1
            className="text-[20px] font-bold italic select-none"
            >URL Shortener - Vishal Yennam</h1>
        </div>
        {/* navbar */}
        <div 
        className="hidden md:flex gap-3 items-center order-3"
        >
            {/* nav links */}
            <ul className="flex gap-3"
            >
                {
                    navLinks.map((link, index) => {
                       return <NavLinks key={index} link={link}/>
                    })
                }
            </ul>
            {/* profile avatar */}
            <div
            className="w-[50px] h-[50px]"
            >
                <Link to="/profile">
                    <img 
                    src="images/profile-2.jpg" 
                    alt="user profile" 
                    className="rounded-[50%]"
                    />
                </Link>
            </div>
        </div>
        {/* mobile navbar */}
        <div
        className="flex md:hidden order-1"
        >
            <IoMenu
            className="text-[35px]"
            onClick={()=>setMobileNav(true)}
            />
        </div>
        <div
        className={`flex md:hidden bg-gray-800 text-white absolute py-20 px-7 top-0 ${
            mobileNav?"left-0":"left-[-300px]"
        } h-dvh w-[250px] transition-all duration-300`}
        >
            <IoMdClose
            className="text-white absolute top-5 right-5 text-2xl"
            onClick={()=>setMobileNav(false)}
            />
            <ul
            className="flex flex-col gap-3"
            >
                {
                    navLinks.map((link, index) => {
                       return <NavLinks key={index} link={link} setMobileNav={setMobileNav}/>
                    })
                }
            </ul>
        </div>
    </header>
    </>
    )
}

export default Header;