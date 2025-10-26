import { NavLink } from "react-router-dom"

// navbar links
export const NavLinks = ({
    link,
    setMobileNav
}) => {
    return (
    <>
        <li
        className="text-[18px] font-[500] cursor-pointer flex after:h-[5px]"
        >
            {
                !localStorage.getItem("user") && (link=="Login" || link=="Register")?
                <NavLink
                to={`/${link.toLowerCase()}`}
                className="link"
                onClick={() => setMobileNav(false)}
                >{link}</NavLink>
                :localStorage.getItem("user") && link=="Logout" ?
                <NavLink 
                to={`/${link.toLowerCase()}`} 
                className="link"
                onClick={() => setMobileNav(false)}
                >{link}</NavLink>
                : link=="Home" || link=="About" || link=="Contact" ?
                <NavLink 
                to={`/${link.toLowerCase()=="home"?"":link.toLowerCase()}`}
                onClick={() => setMobileNav(false)} 
                className="link"
                >{link}</NavLink>
                :null
            }
        </li>
    </>
    )
}