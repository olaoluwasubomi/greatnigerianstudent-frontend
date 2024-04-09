import React from "react";
import Nav from "../Navigation/Nav";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { instituteData } from "../Home/institutedata";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import University from "../University/University";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
const Institution = () =>{

    const unidata  = instituteData.map((value, i) =>{
        return(
            <div key={i}  className="bg-white w-96 relative inner1 rounded-xl shadow-lg lg:my-0 md:my-5 sm:my-5">
                <img src={value.image1} className="w-full inner2" />
                <img src={value.elipse2} alt="Elipse image" className="absolute inner2 w-10" />
                <div className="mt-10 px-7">
                    <h4 className="text-2xl font-bold heading">{value.heading}</h4>
                    <p className="my-2 font-bold text-justify text-base paragraph">{value.text}</p>
                    {/* <a href="#" className="mt-5 capitalize font-bold flex items-center gap-x-1 pb-5 heading">{value.link} <IoIosArrowRoundForward className="text-2xl font-bold"/> </a> */}
                    <Link className="mt-5 capitalize font-bold flex items-center gap-x-1 pb-5 heading" to="/University">{value.link} <IoIosArrowRoundForward className="text-2xl font-bold"/> </Link>
                </div>
                <img src={value.elipse} className="absolute w-13 inner3" />
            </div>
        )
    })
    return(
        <div>
            <div className="relative px-12 lg:py-5 lg:px-12 md:px-10 sm:px-2">
                <Nav />
                <img src="/images/Vector.png" 
                className="absolute right-0 w-32  lg:block md:block sm:hidden mt-10"
                />
                <h2 className="text-center text-5xl mt-24 capitalize font-bold w-1/4 leading-relaxed mx-auto lg:w-1/3 md:w-1/4 sm:w-full lg:text-5xl md:text-5xl sm:text-4xl">Explore the <span className="secondcolor">institution</span> of your choice</h2>
                <form className="flex items-center justify-center  lg:w-1/2 md:w-1/2 sm:w-full bg-white mx-auto mt-20 rounded-full px-10 border-2">
                    <IoSearchOutline className="text-2xl" />
                    <input type="text"  placeholder="Search for school" className="py-4 px-2 w-full bg-transparent placeholder:text-black outline-none" />
                </form>
            </div>

            
            <div className="my-10 flex items-center justify-between w-full lg:px-40 md:px-40 sm:px-10 lg:flex-row md:flex-col sm:flex-col">{unidata}</div>
            <div className="my-10 flex items-center justify-between w-full lg:px-40 md:px-40 sm:px-10 lg:flex-row md:flex-col sm:flex-col">{unidata}</div>
            <div className="my-10 flex items-center justify-between w-full lg:px-40 md:px-40 sm:px-10 lg:flex-row md:flex-col sm:flex-col">{unidata}</div>
            <div className="my-10 flex items-center justify-between w-full lg:px-40 md:px-40 sm:px-10 lg:flex-row md:flex-col sm:flex-col">{unidata}</div>
            <div className="my-10 flex items-center justify-between w-full lg:px-40 md:px-40 sm:px-10 lg:flex-row md:flex-col sm:flex-col">{unidata}</div>


            <div className="flex items-end  justify-end w-full mx-auto my-10 lg:px-28 md:px-28 sm:px-10">
                <div className="flex items-end justify-between lg:w-60 md:w-60 sm:w-1/2 lg:px-12 md:px-12 sm:px-0 my-10">
                    <AiOutlineLeft className="text-6xl bg-red-300 lg:p-4 md:p-4 sm:p-2 rounded-full arrow1" />
                    <AiOutlineRight className="text-6xl bg-red-300 lg:p-4 md:p-4 sm:p-2 rounded-full arrow2 text-white" />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Institution;