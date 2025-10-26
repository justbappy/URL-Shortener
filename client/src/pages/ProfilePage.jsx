

// profile page
const ProfilePage = () => {
    return (
    <>
    <div
    className="flex flex-col lg:flex-row contentChild justify-center items-center gap-8 lg-gap-0 p-4"
    >
        <div
        className="border-2 p-5"
        >
            <div 
            className="flex justify-center"
            >
                <img src="images/profile-2.jpg" alt="" 
                className="rounded-[50%] w-[30%] md:w-[30%]"
                />
            </div>
            <div
            className=" mt-5 flex flex-col gap-2"
            >
                <h1
                className="text-center text-2xl font-bold "
                >User name</h1>
                <p
                className="text-center text-[20px] "
                >emailloggedin@gmail.com</p>
                <div
                className="flex gap-2 flex-col md:flex-row justify-center"
                >
                    <div
                    className="bg-black text-white text-center py-2 px-5 cursor-pointer text-[18px] hover:rounded-2xl transition-all duration-200"
                    >
                        <button 
                        type="submit"
                        >
                            verify email
                        </button>
                    </div>
                    <div
                    className="bg-black text-white text-center py-2 px-5 cursor-pointer text-[18px] hover:rounded-2xl transition-all duration-200"
                    >
                        <button 
                        type="submit"
                        >
                            change password
                        </button>
                    </div>
                    <div
                    className="bg-black text-white text-center py-2 px-5 cursor-pointer text-[18px] hover:rounded-2xl transition-all duration-200"
                    >
                        <button 
                        type="submit"
                        >
                            edit profile
                        </button>
                    </div>
                    </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default ProfilePage;
