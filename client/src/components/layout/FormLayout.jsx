

// form layout
const FormLayout = () => {
    return (
    <>
    <div>
    <form 
    action="#"
    method="#"
    className="flex flex-col gap-3"
    >
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
        {/* Description */}
        <div
        className=""
        >
            <label 
            htmlFor="email"
            className="text-[18px]"
            >Your Message:</label>
            <div
            className="border-black border-2 text-[18px] py-1 px-2 w-[100%] h-[300px] "
            >
                <textarea 
                name="message" 
                id="message"
                placeholder="enter your message" 
                className="outline-none border-none w-[100%] h-[100%] resize-none"
                />
            </div>
        </div>
        {/* submit */}
        <div
        className="bg-black text-white text-center py-2 cursor-pointer text-[18px] hover:rounded-2xl transition-all duration-200"
        >
            <button 
            type="submit"
            >
                Submit
            </button>
        </div>
    </form>
    </div>
    </>
    )
}

export default FormLayout;