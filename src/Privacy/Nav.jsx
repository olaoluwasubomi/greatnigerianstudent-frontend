import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
const Nav = () =>{
    return(
        <div className="bg-white lg:w-9/12 md:w-9/12 sm:w-10/12 mx-auto my-7 lg:px-10 md:px-10 sm:px-2 lg:py-4 md:py-4 sm:py-4 flex items-center justify-between rounded-3xl">
            <img src="/images/For light bg.png" />
            <Link to="/"className="lg:flex md:flex items-center justify-between gap-x-1 navcolor py-3 px-5 text-white rounded-3xl sm:hidden">Our Website <GoArrowUpRight /></Link>
        </div>
    )
}
export default Nav;