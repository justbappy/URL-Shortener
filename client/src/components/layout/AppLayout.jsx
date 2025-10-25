import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// App Layout
const AppLayout = () => {

    

    return (
    <div className="wrapper">
        <div className="header">
            <Header/>
        </div>
        <div className="content">
            <Outlet/>
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </div>
    )
}

export default AppLayout;