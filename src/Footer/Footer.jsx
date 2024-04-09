import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () =>{
    return(
        <div className="lg:mt-20 md:mt-20 sm:mt-10">
            <div className="questionbg text-center py-10">
                <h3 className="font-bold mx-auto text-white leading-relaxed lg:w-2/4 md:w-2/4 sm:w-full lg:text-4xl md:text-3xl sm:text-3xl ">Got Questions You Would Like To Get Answered? We’ve You Covered</h3>
                <div className="mt-10 flex items-center justify-center mx-auto lg:w-1/3 md:w-1/2 sm:w-full lg:px-0 md:px-0 sm:px-2 lg:gap-x-12 md:gap-x-5 sm:gap-x-2">
                    <a href="#" className="block bg-white py-5  rounded-full text-lg contactcolor lg:w-1/2 md:w-1/2 sm:w-full">Contact Us</a>
                    <a href="#" className="block py-5 w-1/2 rounded-full bg-transparent border-2 text-white text-lg lg:w-1/2 md:w-1/2 sm:w-full">Join our community</a>
                </div>
            </div>

            <div className="flex items-center justify-between w-full mt-20 pb-20 lg:flex-row md:flex-row sm:flex-col-reverse">
                <div className="flex items-start justify-center flex-col lg:w-2/3 md:w-2/3 sm:w-full lg:flex-col sm:flex-row md:flex-col lg:mt-0 md:mt-0 sm:mt-10">
                    <img src="/images/Group 2 (1).png" className="lg:pl-40 md:pl-20 sm:pl-0 sm:w-9/12 lg:w-full md:w-full "/>
                    <div className="flex items-start justify-start relative bottom-8 gap-x-4 sm:flex-col md:flex-row lg:flex-row sm:items-center md:items-start lg:items-start sm:gap-y-1 sm:justify-center md:justify-start lg:justify-start sm:mt-10 md:mt-0 lg:mt-0">
                        <img src="/images/Rectangle7.png" className="lg:block md:block sm:hidden" />
                        <img src="/images/Rectangle8.png" className="lg:block md:block sm:hidden" />
                        <img src="/images/Rectangle7(1).png" className="lg:hidden md:hidden sm:block" />
                        <img src="/images/Rectangle8(1).png" className="lg:hidden md:hidden sm:block"  />
                    </div>
                </div>
                <div className="w-full lg:pl-60 md:pl-40 sm:pl-4 lg:pr-40 md:pr-40 sm:pr-4">
                    <h3 className="font-bold secondcolor sm:w-full md:w-1/2 lg:w-1/2 lg:text-4xl md:text-4xl sm:text-2xl">Don't Miss Out!</h3>
                    <p className="mt-6 paragraph font-bold text-2xl lg:text-2xl md:text-2xl sm:text-lg">Subscribe to our Newsletter</p>
                    <form className="mt-3">
                        <input className="py-4 px-5 rounded-full border-2 border-black bgg-transparent mt-2 lg:w-3/4 md:w-3/4 sm:w-full" type="text" placeholder="Enter your name" />
                        <input className="py-4 px-5 rounded-full border-2 border-black bgg-transparent mt-5 lg:w-3/4 md:w-3/4 sm:w-full" type="email" placeholder="Enter your email address" />
                        <input className="w-3/4 viewbg text-white py-4 rounded-full mt-5 lg:w-3/4 md:w-3/4 sm:w-full" type="submit" value="Submit" />
                    </form>
                </div>
            </div>



            <div className="questionbg px-40 pt-12 pb-0 lg:px-40 md:px-20 sm:px-4">
                <div className="flex items-center justify-between w-full lg:gap-x-0 md:gap-x-0 sm:gap-x-4">
                    <img src="/images/For dark bg.png"  alt="logo" className="sm:w-20" />
                    <div className="flex items-center justify-center text-white lg:gap-x-3 md:gap-x-3 sm:gap-x-1">
                        <p className="lg:text-lg md:text-lg sm:text-sm">Connect with us</p>
                        <MdOutlineFacebook className="lg:text-2xl md:text-2xl sm:text-base " />
                        <FaTwitter className="lg:text-2xl md:text-2xl sm:text-base " />
                        <RiLinkedinLine className="lg:text-2xl md:text-2xl sm:text-base " />
                        <IoLogoInstagram className="lg:text-2xl md:text-2xl sm:text-base " />
                    </div>
                </div>
                <hr className="mt-5" />

                <div className="flex items-start justify-between lg:flex-row md:flex-row sm:flex-col sm:flex-wrap">
                    <div className="mt-10">
                        <p className="text-xl font-bold text-white">Browse</p>
                        <a href="#" className="block footertext mt-2  text-lg">All institutions</a>
                        <a href="#" className="block footertext mt-2  text-lg">Our Latest News</a>
                    </div>

                    <div className="mt-10">
                        <p className="text-xl font-bold text-white">About Us</p>
                        <a href="#" className="block footertext mt-2  text-lg">Our Goal</a>
                        <a href="#" className="block footertext mt-2  text-lg">Our Mission</a>
                        <a href="#" className="block footertext mt-2  text-lg">Our Vision</a>
                    </div>

                    <div className="mt-10">
                        <p className="text-xl font-bold text-white">Learn More</p>
                        <a href="#" className="block footertext mt-2  text-lg">Contact Us</a>
                        <a href="#" className="block footertext mt-2  text-lg">Join our community</a>
                    </div>

                    <div className="mt-10">
                        <p className="text-xl font-bold text-white">Get in Touch</p>
                        <p className="footertext mt-2  text-lg">Get notified with our latest news</p>

                        <form className="mt-2 flex items-center justify-center bg-white px-1 py-1 rounded-full w-full overflow-hidden">
                            <div className="flex items-center justiify-center gap-x-2 py-3 rounded-full">
                                <MdOutlineEmail className="text-xl" />
                                <input type="email" placeholder="Email" className="bg-transparent border-none outline-none"/>
                            </div>

                            <input type="submit" value="Submit" className="text-white bg viewbg px-5 py-2 rounded-full" />
                        </form>
                    </div>
                </div>

                <hr className="lg:mt-40 md:mt-20 sm:mt-10" />
                <div className="flex items-center justify-between mt-2 text-white footertext pb-5">
                    <p className="lg:text-base md:text-base sm:text-sm">GNS@2024. All Rights Reserved</p>
                    <div className="flex items-center justify-center lg:gap-x-10 md:gap-x-10 sm:gap-x-2">
                        <p className="text-base">Help</p>
                        <p className="text-base">Terms of Use</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;