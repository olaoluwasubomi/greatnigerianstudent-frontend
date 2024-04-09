import React from "react";
import Nav from "../Navigation/Nav";
import { Link } from "react-router-dom";
import achievementdata from "./achievementdata";
import eventsdata from "./eventsdata";
import Footer from "../Footer/Footer";
const Aboutuni = () =>{

    const data = achievementdata.map((item, i) =>{
        return(
            <div key={i} className="lg:w-5/12 md:w-full sm:w-full bg-white mt-7 p-3 rounded-xl shadow-lg">
                <img src={item.image}  className="w-full"/>
                <h6 className="mt-2 text-xl font-bold">{item.title}</h6>
                <p className="mt-5 font-bold">{item.date}</p>
            </div>
        )
    })

    const event = eventsdata.map((event,  i) =>{
        return(
            <div key={i}  className="bg-white lg:w-96 md:w-full sm:w-full relative inner1 rounded-xl shadow-lg lg:my-0 md:my-5 sm:my-5">
            <img src={event.image} className="w-full inner2" />
            <img src={event.elipse2} alt="Elipse image" className="absolute inner2 w-10" />
            <div className="mt-10 px-7">
                <h4 className="text-2xl font-bold heading">{event.eventName}</h4>
                <p className="my-2 font-bold text-justify text-base paragraph">{event.eventText}</p>
                {/* <a href="#" className="mt-5 capitalize font-bold flex items-center gap-x-1 pb-5 heading">{value.link} <IoIosArrowRoundForward className="text-2xl font-bold"/> </a> */}

                {/* <Link className="mt-5 capitalize font-bold flex items-center gap-x-1 pb-5 heading" to="/University">{value.link} <IoIosArrowRoundForward className="text-2xl font-bold"/> </Link> */}
            </div>
            <img src={event.elipse} className="absolute w-13 inner3" />
        </div>
        )
    })
    return(
        <div className="abooutbg">
            <div className="relative px-12 lg:px-12 lg:py-5 md:px-10 sm:px-2">
                <Nav />
                <img src="/images/Vector.png" className="absolute right-0 w-32  lg:block md:block sm:hidden mt-10" alt="Vector" />
                <h2 className="text-center text-5xl mt-24 capitalize font-bold w-1/4 leading-relaxed mx-auto lg:w-1/3 md:w-1/4 sm:w-full lg:text-5xl md:text-5xl sm:text-4xl">University  of Lagos</h2>
            </div>

            <div className="flex items-start justify-between w-full lg:px-40 md:px-20 sm:px-2 gap-x-20 my-20 sm:flex-col md:flex-col lg:flex-row">
                <div className="lg:w-1/2 md:w-full sm:w-full bg-white px-10 py-5 rounded-xl">
                    <h5 className="text-4xl font-bold">Gallery</h5>
                    <img src="/images/Rectangle 60.png" className="mt-5 w-full" />
                    <div className="flex items-center justify-center gap-x-2 mt-5">
                        <img src="/images/Frame 1294.png" className="lg:w-full md:w-1/2 sm:w-1/2" />
                        <img src="/images/Rectangle 62.png" className="w-full md:w-1/2 sm:w-1/2" />
                    </div>
                    <div className="flex items-center justify-center gap-x-2 w-full">
                        <img src="/images/Rectangle 64.png" className="w-full md:w-1/2 sm:w-1/2" />   
                        <img src="/images/Rectangle 63.png" className="w-full md:w-1/2 sm:w-1/2" />
                    </div>
                    <img src="/images/Rectangle 65.png" className="mt-5 w-full" />
                </div>

                <div className="lg:w-1/2 md:w-full sm:w-full bg-white px-10 py-5 pb-20 rounded-xl">
                    <h5 className="text-4xl font-bold">About</h5>
                    <p className="mt-5 paragraph font-bold text-justify">The University of Lagos, popularly known as UNILAG, is a public research university located in Lagos, Nigeria and was founded in 1962. UNILAG is one of the first generation universities in Nigeria and is ranked among the top universities in the world in major education publications.The University of Lagos, popularly known as UNILAG, is a public research university located in Lagos, Nigeria and was founded in 1962. UNILAG is one of the first generation universities in Nigeria and is ranked among the top universities in the world in major education publications.The University of Lagos, popularly known as UNILAG, is a public research university located in Lagos, Nigeria and was founded in 1962. UNILAG is one of the first generation universities in Nigeria and is ranked among the top universities in the world in major education publications.The University of Lagos, popularly known as UNILAG, is a public research university located in Lagos, Nigeria and was founded in 1962. UNILAG is one of the first generation universities in Nigeria and is ranked among the top universities in the world in major education publications.</p>
                    <h5 className="text-4xl font-bold mt-10">Achievement</h5>
                    <div className="flex items-center justify-between flex-wrap w-full gap-x-2 mt-5">
                        {data}
                    </div>
                </div>
            </div>
            <div className="bg-white py-20">
                <h5 className="text-6xl font-bold text-center paragraph">Official Event</h5>
                <div className="flex items-center justify-between lg:px-40 md:px-10 sm:px-10 gap-x-10 mt-10 flex-wrap">
                    {event}
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default Aboutuni;