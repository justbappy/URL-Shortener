import { Link } from "react-router-dom"

// navbar links
export const NavLinks = ({
    link,
    setMobileNav
}) => {
    return (
    <>
        <li
        className="text-[18px] font-[500] cursor-pointer"
        >
            {
                !localStorage.getItem("user") && (link=="Login" || link=="Register")?
                <Link to={`/${link.toLowerCase()}`}
                onClick={() => setMobileNav(false)}
                >{link}</Link>
                :localStorage.getItem("user") && link=="Logout" ?
                <Link to={`/${link.toLowerCase()}`}
                onClick={() => setMobileNav(false)}
                >{link}</Link>
                : link=="Home" || link=="About" || link=="Contact" ?
                <Link to={`${link.toLowerCase()}`}
                onClick={() => setMobileNav(false)}
                >{link}</Link>
                :""
            }
        </li>
    </>
    )
}