import React  from "react";
import { useState } from "react";
import { useEffect } from "react";
import { IoMdArrowDropdown, IoMdMenu, IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { IoClose, IoCloseSharp } from "react-icons/io5";
const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation();
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    useEffect(() =>{
        window.scrollTo(0,0);
      } , [location]);
    return (
        <div className="bg-white px-10 py-1 rounded-3xl lg:mt-3 md:mt-10 sm:mt-2 shadow">
        <div className="navbg flex items-center justify-between w-full lg:px-10 sm:px-0 py-0 sm:flex-col lg:flex-row">
            <div className="flex items-center lg:justify-start gap-x-2 lg:w-1/5 sm:w-full sm:justify-between">
                <div className="w-1/3">
                    <Link to="/"><img src="/images/For light bg (1).png" alt="logo" className="w-26" /></Link>
                    {/* <img src="/images/For light bg (1).png" className="w-24"/> */}
                </div>
                <div className="lg:hidden">
                    {isNavOpen ? (
                        <IoCloseSharp className="text-4xl text-black" onClick={toggleNav} />
                        ) : (
                        <GrMenu className="text-4xl text-black" onClick={toggleNav} />
                    )}
                </div>
            </div>
    
            <div className="lg:flex items-center justify-between gap-x-32 lg:flex-col lg:w-full sm:w-full sm:flex-row mx-auto">
                <div className="nav-container">
                    <nav className={`lg:flex items-center justify-center w-full ${isNavOpen ? "block" : "hidden"}`}>
                        <ul className={`flex items-start justify-between gap-x-20 w-full sm:pb-10 md:pb-0 lg:pb-0 lg:flex-row sm:flex-col lg:my-0 sm:mt-2 ${isNavOpen ? "flex-col" : ""}`}>
                            <div className="w-2/4 flex lg:items-center md:items-start sm:items-start justify-between lg:mx-auto sm:mx-0 lg:flex-row md:flex-row sm:flex-col">
                            <Link className="capitalize font-bold lg:my-0 md:my-0 sm:my-2 py-3" to="/">Home</Link>
                            <Link className="flex items-center justify-center capitalize font-bold lg:my-0 md:my-0 sm:my-2 py-3" to="/Institution" >Browse<IoMdArrowDropdown /></Link>
                            <Link className="capitalize font-bold lg:my-0 md:my-0 sm:my-2 py-3" to="/Blogs">Blogs</Link>
                            <Link className="flex items-center justify-center capitalize font-bold lg:my-0 md:my-0 sm:my-2 py-3" to="/About">about <IoMdArrowDropdown /></Link>
                            <Link className="capitalize font-bold lg:my-0 md:my-0 sm:my-2 py-3" to="">Contact</Link>
                            </div>
                            <a href="#" className="py-3 w-52 text-white text-center text-sm rounded-full bgcolor capitalize communityclass">Join our community</a>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Nav;