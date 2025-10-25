import FormLayout from "../components/layout/FormLayout";

// contact page
const ContactPage = () => {
    return (
    <>
    <section className="flex flex-col md:flex-row gap-5 justify-between items-center md:px-10 contentChild">
        <div className="flex-1 flex justify-between md:h-[500px]">
            <img src="images/contact-us-hero.jpg" alt="" />
        </div>
        <div className="flex-1 py-3 md:py-0">
            <FormLayout/>
        </div>
    </section>
    </>
    )
}

export default ContactPage;