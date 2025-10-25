

// about page
const AboutPage = () => {
    return (
    <>
    <section className="lg:px-30">
        <div>
            <h1
            className="text-[25px] font-bold text-center"
            >
                About us
            </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 mt-7 px-10">
            <div className="flex-1 sm:h-[350px] lg:h-[450px] border-2 flex justify-center">
                <img src="images/github-avatar.jpg" alt="" className="h-[100%]"/>
            </div>

            <p className="flex-1 text-2xl text-justify">
                This is a URL shortener project created by Vishal Yennam. You can convert a large link into short by providing original link and your keywords to shorten it. Follow me for more projects at github,&nbsp;
                <a 
                href="https://github.com/justbappy"
                className="text-blue-500"
                >justbappy</a>&nbsp;
                and&nbsp;
                <a 
                className="text-blue-500" 
                href="https://github.com/mr-bappy"
                >mr-bappy</a>.
                to contact me you can mail me here&nbsp;
                <a href="mailto:mr.justbappy@gmail.com"
                className="text-blue-500"
                >mr.justbappy@gmail.com</a>
            </p>

        </div>
    </section>
    </>
    )
}

export default AboutPage;