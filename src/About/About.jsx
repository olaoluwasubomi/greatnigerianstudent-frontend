import React from "react";
import Nav from "../Navigation/Nav";
import Footer from "../Footer/Footer";
const About = () =>{
    return(
        <div className="abooutbg">
            <div className="relative px-12 lg:py-5 lg:px-12 md:px-10 sm:px-2">
                <Nav />
                <img src="/images/Vector.png" 
                className="absolute right-0 w-32  lg:block md:block sm:hidden"
                />
                <h2 className="text-center text-5xl mt-16 capitalize font-bold w-1/4 leading-relaxed mx-auto lg:w-1/4 md:w-1/4 sm:w-full lg:text-5xl md:text-5xl sm:text-4xl">for the greatest nigerian <span className="secondcolor">students</span></h2>
                <div className="flex items-start justify-between w-full px-40 mt-10 lg:px-40 md:px-20 sm:px-0 lg:gap-x-6 md:gap-x-6 sm:gap-x-2">
                    <img src="/images/Rectangle 35.png" className="lg:w-60 md:w-96 sm:w-16" />
                    <div>
                        <img src="/images/Rectangle 36.png"  className="lg:w-60 md:w-96 sm:w-16"/>
                        <img src="/images/Rectangle 42.png" className="lg:w-60 md:w-96 sm:w-16 lg:mt-10 md:mt-10 sm:mt-2" />
                    </div>
                    <img src="/images/Rectangle 38.png"  className="lg:w-60 md:w-96 sm:w-16"  />
                    <img src="/images/Rectangle 39.png"  className="lg:w-60 md:w-96 sm:w-16"  />
                    <img src="/images/Rectangle 40.png"  className="lg:w-60 md:w-96 sm:w-16"  />
                    <img src="/images/Rectangle 41.png"  className="lg:w-60 md:w-96 sm:w-16"  />
                </div>
            </div>

            <div className="lg:mt-32 md:mt-20 sm:mt-20 flex items-center justify-between lg:w-3/4 md:w-3/4 sm:w-full  mx-auto lg:flex-row md:flex-row sm:flex-col lg:px-40 ms:px-40 sm:px-4 ">
                <h3 className="font-bold capitalize lg:text-4xl md:text-4xl sm:text-3xl lg:w-1/3 md:w-1/3 sm:w-full leading-relaxed paragraph">want to know <span className="secondcolor">about us?</span></h3>
                <p className="lg:w-5/12 md:w-5/12 sm:w-full paragraph font-bold text-base leading-relaxed lg:mt-0 md:mt-0 sm:mt-10">GNS (Great Nigerian Students) links skilled students across universities and colleges, creating a space for collaboration and relationship building. It aspires to foster a dynamic community of ambitious individuals from diverse backgrounds, encouraging mutual support and learning through connections.</p>
            </div>

            <div className="flex items-center justify-between w-full lg:mt-20 md:mt-20 sm:mt-10 gap-x-20 lg:flex-row md:flex-row sm:flex-col">
                <div className="flex items-start justify-center sm:flex-row md:flex-col lg:flex-col sm:w-full md:w-2/3 lg:w-1/3">
                    <img src="/images/Maskgroup.png" className="lg:pl-40 md:pl-20 sm:pl-0 sm:w-9/12 lg:w-full md:w-full"/> 
                     <div className="flex relative bottom-8 gap-x-2 sm:flex-col md:flex-row lg:flex-row sm:items-center md:items-start lg:items-start sm:gap-y-1 sm:justify-center md:justify-start lg:justify-start sm:mt-10 md:mt-0 lg:mt-0">
                        <img src="/images/Rectangle7.png" className="lg:block md:block sm:hidden" />
                        <img src="/images/Rectangle8.png" className="lg:block md:block sm:hidden" />
                        <img src="/images/Rectangle7(1).png" className="lg:hidden md:hidden sm:block" />
                        <img src="/images/Rectangle8(1).png" className="lg:hidden md:hidden sm:block"  />
                    </div>
                </div>

                <div className="lg:pr-56 md:pr-56 sm:px-10 lg:w-1/2 md:w-1/2 sm:w-full">
                    <h3  className="font-bold capitalize text-4xl lg:w-1/3 md:w-1/3 sm:w-full leading-relaxed secondcolor">our goal</h3>
                    <p className="lg:w-8/12 md:w-8/12 sm:w-full paragraph font-bold text-base leading-relaxed">To provide a platform that proffers vital news and information within and outside the university for easy connections among students, ability to create healthy competitions, secure schooling opportunities such as scholarships, and student-preneurer can get to advertise their services to a large audience.</p>
                </div>
            </div>

            <div className="flex items-center justify-between w-full mt-20 gap-x-20 lg:flex-row-reverse md:flex-row-reverse sm:flex-col ">
                <div className="flex lg:items-end lg:justify-end md:items-end md:justify-end sm:items-start sm:justify-start sm:flex-row md:flex-col lg:flex-col sm:w-full md:w-2/3 lg:w-1/3">
                    <img src="/images/Group1(1).png" className="lg:pr-40 md:pl-20 sm:pl-10 sm:w-9/12 lg:w-full md:w-full"/> 
                     <div className="flex relative bottom-8 gap-x-2 sm:flex-col md:flex-row lg:flex-row-reverse sm:items-end md:items-end lg:items-end sm:gap-y-1 sm:justify-end md:justify-end lg:justify-end sm:mt-10 md:mt-0 lg:mt-0">
                        <img src="/images/Rectangle 7.png" className="lg:block md:block sm:hidden" />
                        <img src="/images/Rectangle8.png" className="lg:block md:block sm:hidden" />
                        <img src="/images/Rectangle7(1).png" className="lg:hidden md:hidden sm:block" />
                        <img src="/images/Rectangle8(1).png" className="lg:hidden md:hidden sm:block"  />
                    </div>
                </div>

                <div className="lg:pl-56 md:pl-56 sm:pl-10  lg:w-1/2 md:w-1/2 sm:w-full">
                    <h3 className="font-bold capitalize text-4xl lg:w-1/3 md:w-1/3 sm:w-full leading-relaxed secondcolor">our mission</h3>
                    <p className="lg:w-8/12 md:w-8/12 sm:w-full paragraph font-bold text-base leading-relaxed">To make people realize the power of meaningful connections through the use of technology by providing diverse approaches and mediums whereby indispensable opportunity can be secured.</p>
                </div>
            </div>

            <div className="flex items-center justify-between w-full mt-20 gap-x-20 lg:flex-row md:flex-row sm:flex-col">
                <div className="flex items-start justify-center sm:flex-row md:flex-col lg:flex-col sm:w-full md:w-2/3 lg:w-1/3">
                    <img src="/images/Group 1 (1).png" className="lg:pl-40 md:pl-20 sm:pl-0 sm:w-9/12 lg:w-full md:w-full"/> 
                     <div className="flex relative bottom-8 gap-x-2 sm:flex-col md:flex-row lg:flex-row sm:items-center md:items-start lg:items-start sm:gap-y-1 sm:justify-center md:justify-start lg:justify-start sm:mt-10 md:mt-0 lg:mt-0">
                        <img src="/images/Rectangle7.png" className="lg:block md:block sm:hidden" />
                        <img src="/images/Rectangle8.png" className="lg:block md:block sm:hidden" />
                        <img src="/images/Rectangle7(1).png" className="lg:hidden md:hidden sm:block" />
                        <img src="/images/Rectangle8(1).png" className="lg:hidden md:hidden sm:block"  />
                    </div>
                </div>

                <div className="lg:pr-56 md:pr-56 sm:px-10 lg:w-1/2 md:w-1/2 sm:w-full">
                    <h3  className="font-bold capitalize text-4xl lg:w-1/3 md:w-1/3 sm:w-full leading-relaxed secondcolor">our vision</h3>
                    <p className="lg:w-8/12 md:w-8/12 sm:w-full paragraph font-bold text-base leading-relaxed">Our prospect is to help people achieve their ambition through our platform that fosters the exchange of meaningful ideas among goal-oriented individuals.</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default About;