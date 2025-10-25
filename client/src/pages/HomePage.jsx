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
        <h1>HomePage</h1>
    )
}

export default HomePage;