import React from "react";
import Nav from "../Navigation/Nav";
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { instituteData } from "./institutedata";
import Footer from "../Footer/Footer";
import newsData from "../newsdata";
import { Link } from "react-router-dom";
const Home = () =>{


    const data = instituteData.map((item, i) =>{
        return(
            <div key={i} className="bg-white w-96 relative inner1 rounded-xl shadow-lg lg:my-0 md:my-5 sm:my-5">
                <img src={item.image1} className="w-full inner2" />
                <img src={item.elipse2} alt="Elipse image" className="absolute inner2 w-10" />
                <div className="mt-10 px-7">
                    <h4 className="text-2xl font-bold heading">{item.heading}</h4>
                    <p className="my-2 font-bold text-justify text-base paragraph">{item.text}</p>
                    <Link  className="mt-5 capitalize font-bold flex items-center gap-x-1 pb-5 heading" to="/University" >{item.link} <IoIosArrowRoundForward className="text-2xl font-bold"/> </Link>
                </div>
                <img src={item.elipse} className="absolute w-13 inner3" />
            </div>
        )
    })  


    const newData  = newsData.map((values,i) =>{
        return(
            <div key={i} className="flex justify-between mt-5 lg:gap-x-8 md:gap-x-8 sm:gap-x-3 lg:items-center md:items-center sm:items-start">
                <img src={values.image} className="w-48 rounded-xl lg:w-48 md:w-48 sm:w-32 " />
                <div>
                    <h5 className="text-xl w-full font-bold heading">{values.topic}</h5>
                    <p className="paragraph lg:w-3/5 md:w-3/5 sm:w-full lg:font-bold md:font-bold sm:font-normal lg:my-1 md:my-1 sm:my-0">{values.text}</p>
                    <a  href="#" className="heading flex items-center justify-start gap-x-1 font-bold"> {values.link} <IoIosArrowRoundForward className="font-bold text-3xl" />  </a>
                </div>
            </div>
        )
    })
    return(
        <div className="w-full h-screen">
            <div className="home py-7 sm:px-4 md:px-10 lg:px-12">
                <Nav />
                <div className="mx-auto sm:py-20 md:py-20 lg:py-40">
                <h2 className="capitalize text-white text-center font-extrabold mx-auto lg:text-7xl md:text:5xl sm:text-3xl sm:w-full md:w-full lg:w-1/2 ">The great nigerian student platform</h2>
                <p className="mt-7 text-white mx-auto text-center font-semibold text-xl sm:w-full md:w-full lg:w-1/3">GNS is a platform where ambitious students from different tertiary institutions get to meet and connect.</p>
                {/* <a href="#" className="mx-auto text-center mt-6 text-black flex items-center justify-center gap-x-2 bg-white py-4 text-xl font-bold rounded-full sm:w-2/3 md:w-1/2 lg:w-1/6">Explore Institutions <HiOutlineDownload /> </a> */}
                <Link className="mx-auto text-center mt-6 text-black flex items-center justify-center gap-x-2 bg-white py-4 text-xl font-bold rounded-full sm:w-2/3 md:w-1/2 lg:w-1/6" to="/Institution">Explore Institution  <HiOutlineDownload /> </Link>
                </div>
            </div>


            <div className="mt-20">
                <h4 className="capitalize text-center mx-auto text-3xl font-medium sm:w-full md:w-1/2 lg:w-1/5">Empowering students in all institutions</h4>
                <div className="flex justify-center items-center w-full mt-5 sm:flex-col md:flex-row lg:flex-row ">
                    <div className="flex items-start justify-center sm:flex-row md:flex-col lg:flex-col sm:w-full md:w-2/3 lg:w-2/3">
                        <img src="/images/Maskgroup.png" className="lg:pl-40 md:pl-20 sm:pl-0 sm:w-9/12 lg:w-full md:w-full"/> 
                        <div className="flex relative bottom-8 gap-x-2 sm:flex-col md:flex-row lg:flex-row sm:items-center md:items-start lg:items-start sm:gap-y-1 sm:justify-center md:justify-start lg:justify-start sm:mt-10 md:mt-0 lg:mt-0">
                            <img src="/images/Rectangle7.png" className="lg:block md:block sm:hidden" />
                            <img src="/images/Rectangle8.png" className="lg:block md:block sm:hidden" />
                            <img src="/images/Rectangle7(1).png" className="lg:hidden md:hidden sm:block" />
                            <img src="/images/Rectangle8(1).png" className="lg:hidden md:hidden sm:block"  />
                        </div>
                    </div>
                    <div  className="w-full pl-60 lg:pl-60 md:pl-20 sm:pl-10">
                        <h6 className="font-semibold text-3xl capitalize secondcolor">why gns?</h6>
                        <p className="my-4 w-1/2 leading-8 text-xl lg:w-1/2 md:w-4/5 md:text-justify sm:w-full sm:font-normal lg:font-semibold md:font-semibold">GNS creates a friendly and imperative avenue that makes it easier to get hold of positive opportunities fitted for all individuals ranging from applicants, undergraduates, graduates, and potential employers.</p>
                    </div>
                </div>
            </div>


            <div className="relative">
                <img src="/images/Vector.png" 
                className="absolute right-0 w-32 lg:block md:block sm:hidden"
                />
                <h4 className="text-center text-4xl font-semibold lg:my-20 md:my-20 sm:my-10  lg:mx-auto md:mx-auto sm:mx-0 lg:px-0 md:px-0 sm:px-10 lg:w-2/5 md:w-2/5 sm:w-full sm:text-center sm:text-2xl md:text-3xl lg:text-4xl">Explore The Institution Of Your Choice And Learn About Them</h4>
                <div className="my-10 flex items-center justify-between w-full lg:px-40 md:px-40 sm:px-10 lg:flex-row md:flex-col sm:flex-col">{data}</div>
                <Link className="block viewbg py-4 text-center text-white mx-auto font-bold rounded-full lg:w-1/6 md:w-1/6 sm:w-1/2" to="/institution">View all Institutions</Link>
                {/* <a href="#" className="block viewbg py-4 text-center text-white mx-auto font-bold rounded-full lg:w-1/6 md:w-1/6 sm:w-1/2">View all Institutions</a> */}
            </div>


            <div className="lg:px-40 md:px-20 sm:px-4">
                <h4 className="font-semibold lg:mt-52 md:mt-52 sm:mt-20 lg:w-2/5 md:w-2/5 sm:w-full lg:mx-auto md:mx-auto sm:mx-0 lg:text-center md:text-center sm:text-start lg:text-4xl md:text-3xl sm:text-3xl">Get updated with our Latest news</h4>
                <div className="flex item-center justify-between lg:flex-row md:flex-row sm:flex-col lg:mt-20 md:mt-20 sm:mt-1">
                    <div className="">
                        <h5 className="secondcolor font-bold text-3xl lg:block md:block sm:hidden">News</h5>
                        <div>
                            {newData}
                        </div>
                    </div>

                    <div className="lg:my-0 md:my-0  sm:my-12">
                        <h5 className="secondcolor font-bold text-3xl">Download our latest news</h5>
                        <img src="/images/Frame 18.png" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    )
}
export default Home;