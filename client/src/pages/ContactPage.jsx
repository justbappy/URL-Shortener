import FormLayout from "../components/layout/FormLayout";

// contact page
const ContactPage = () => {
    return (
    <>
    <section className="flex flex-col lg:flex-row sm:gap-5 md:gap-10 justify-center items-center
    px-7 contentChild">
        <div className="flex justify-center md:h-[500px] lg:w-[50%] w-[100%]">
            <img src="images/contact-us-hero.jpg" alt="" />
        </div>
        <div className="py-3 lg:py-0 lg:w-[50%] w-[100%]">
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
    </section>
    </>
    )
}

export default ContactPage;