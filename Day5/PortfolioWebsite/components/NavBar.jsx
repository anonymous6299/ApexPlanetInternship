import React from 'react'
import { Link, useLocation } from 'react-router'
const NavBar = () => {
    const loc = useLocation();
    return (
        <>
        <div className="navbar flex justify-between shadow-lg px-32 min-[510px]:py-5 items-center max-[720px]:px-20 max-[595px]:px-10 max-[510px]:flex-col max-[510px]:py-3">
            <Link to={"/"}><div className="Portfolio text-2xl font-bold cursor-pointer">PORTFOLIO</div></Link>
            <div className="navs flex space-x-20 font-semibold max-[845px]:space-x-10">
                <Link to={"/"}><p className={`hover:text-lg transition-all cursor-pointer ${loc.pathname==="/"?"underline underline-offset-2":""}`}>HOME</p></Link>
                <Link to={"/contact"}><p className={`hover:text-lg transition-all cursor-pointer ${loc.pathname==="/contact"?"underline underline-offset-2":""}`}>CONTACT</p></Link>
                <Link to={"/projs"}><p className={`hover:text-lg transition-all cursor-pointer ${loc.pathname==="/projs"?"underline underline-offset-2":""}`}>PROJECTS</p></Link>
            </div>
        </div>
        </>
    )
}

export default NavBar