import React  from "react";
import { useState } from "react";
import { IoMdArrowDropdown, IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className="bg-white  px-10 py-4 rounded-3xl lg:mt-3 md:mt-10 sm:mt-2">
            <div className="flex items-center justify-between w-full gap-x-32">
                <div className="w-1/3">
                    <img src="/images/For light bg (1).png" className="w-16" alt="Logo" />
                </div>
                <div className="flex items-center justify-end w-2/3 sm:w-full md:w-full lg:justify-between">
                    <div className="lg:hidden">
                        {isNavOpen ? (
                            <IoMdClose className="text-4xl" onClick={toggleNav} />
                        ) : (
                            <IoMdMenu className="text-4xl" onClick={toggleNav} />
                        )}
                    </div>
                    <nav className={`lg:flex items-center justify-between w-full ${isNavOpen ? "block" : "hidden"}`}>
                        <ul className={`flex items-center justify-center gap-x-20 ${isNavOpen ? "flex-col" : ""}`}>
                            <Link className="capitalize font-bold" to="/">Home</Link>
                            <Link className="flex items-center justify-center capitalize font-bold" to="/Institution" >Browse<IoMdArrowDropdown /></Link>
                            <Link className="capitalize font-bold" to="">Blogs</Link>
                            <Link className="flex items-center justify-center capitalize font-bold" to="/About">about <IoMdArrowDropdown /></Link>
                            <Link className="capitalize font-bold" to="">Contact</Link>
                        </ul>
                        <a href="#" className="py-3 w-44 text-white text-center text-sm rounded-full bgcolor capitalize communityclass">Join our community</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Nav;