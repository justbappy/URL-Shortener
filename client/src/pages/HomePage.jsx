import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export const HomePage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if(location.pathname=="/home"){
            navigate("/");
        }
    }, []);
    
    return (
    <>
    <div
    className="flex flex-col lg:flex-row contentChild gap-5 py-5"
    >
        <div
        className="lg:flex-1 flex justify-center items-center h-[inherit]"
        >
            <form 
            action=""
            className="w-[80%] flex flex-col gap-5 border-2 p-2 md:p-5 lg:p-10 bg-gray"
            >
                <div
                className="flex flex-col gap-1 text-[18px]"
                >
                    <label htmlFor="link">Link address:</label>
                    <div
                    className="border-2 p-2"
                    >
                        <input type="link" placeholder="enter link address"
                        className="w-[100%] outline-none border-none"
                        name="link"
                        />
                    </div>
                </div>
                <div
                className="flex flex-col gap-1 text-[18px]"
                >
                    <label htmlFor="link">Short-word/Keyword:</label>
                    <div
                    className="border-2 p-2"
                    >
                        <input type="text" placeholder="enter keyword"
                        className="w-[100%] outline-none border-none"
                        name="keyword"
                        />
                    </div>
                </div>
                <div
                className="bg-black text-white text-center py-2 cursor-pointer text-[18px] hover:rounded-2xl transition-all duration-200"
                >
                    <button 
                    type="submit"
                    >
                        Add Link
                    </button>
                </div>
            </form>
        </div>
        <div
        className="lg:flex-1"
        >
            <h1
            className="text-2xl font-bold text-center"
            >Your Links</h1>
        </div>
    </div>
    </>
    )
}

export default HomePage;