import React from "react";
import Nav from "../Navigation/Nav";
import { IoSearchOutline } from "react-icons/io5";
import blogsdata from "./blogsdata";
import newsdata from "./newsdata";
import Footer from "../Footer/Footer"
const Blogs = () =>{
    const blogs =  blogsdata.map((blog, i) =>{
        return(
            <div key={i}>
                <p className="text-xl font-bold paragraph ">{blog.title}</p>
                <ol className="my-2 list-decimal">
                    <li className="paragraph w-full mt-2 text-justify">{blog.text1}</li>
                    <li className="paragraph w-full mt-2 text-justify">{blog.text2}</li>
                    <li className="paragraph w-full mt-2 text-justify">{blog.text3}</li>
                    <li className="paragraph w-full mt-2 text-justify">{blog.text4}</li>
                    <li className="paragraph w-full mt-2 text-justify">{blog.text5}</li>
                </ol>
            </div>
        )
    })
    const news = newsdata.map((news, i) =>{
        return(
            <div className="mt-10">
                <img src={news.newsImage} className="w-full" />
                <h6 className="text-2xl font-bold my-5 secondcolor">{news.newsHead}</h6>
                <p className="lg:text-lg md:text-lg sm:text-sm paragraph font-bold">{news.newsName}</p>
                <a href="#" className="block w-full text-center border-secondcolor py-3 border-2 mt-5 rounded-full secondcolor text-xl font-bold readborder">{news.newsLink}</a>
            </div>
        )
    })
    return(
        <div className="abooutbg lg:py-5">
            <div className="px-12">
            <Nav/>
            <img src="/images/Vector.png" className="absolute right-0 w-32  lg:block md:block sm:hidden mt-10" alt="Vector" />
            <h2 className="lg:text-center md:text-center sm:text-start text-5xl mt-24 capitalize font-bold w-1/4 leading-relaxed mx-auto lg:w-1/3 md:w-1/4 sm:w-full lg:text-5xl md:text-5xl sm:text-4xl lg:px-0 md:px-0 sm:px-5">Get Updated with our Latest <span className="secondcolor">News</span></h2>
            <form className="lg:hidden md:hidden w-full border-2  my-5 sm:flex items-center justify-start gap-x-4 px-5 py-3 rounded-full border-black">
                <IoSearchOutline className="text-2xl paragraph font-bold" />
                <input type="text" placeholder="Search for News" className="outline-none" />
            </form>
            <div className="flex items-start justify-between gap-x-12 w-full lg:px-40 md:px-20 sm:px-5 lg:my-20 md:my-10 sm:my-10 lg:flex-row md:flex-row sm:flex-col">
                <div className="bg-white lg:w-1/2 md:w-1/2 sm:w-full p-8 rounded-xl">
                    <h5 className="lg:text-2xl  md:text-2xl sm:text-lg w-full secondcolor font-bold">The Power of Emotional Intelligence: Navigating Life's Challenges with Empathy and Insight</h5>
                    <p className="my-4 paragraph font-bold">Gloria Dasilva Friday 12, August 2023.</p>
                    <img src="/images/Rectangle 34.png" className="w-full" />
                    <p className="my-3 w-full paragraph text-justify"> In a world where technological advancements and academic achievements often take center stage, there's one essential skill that can profoundly impact every aspect of our lives: emotional intelligence (EI). While IQ measures cognitive abilities, EI measures our ability to understand, manage, and effectively utilize our emotions and the emotions of others. It's the cornerstone of successful relationships, effective communication, and personal well-being. In this blog, we'll explore what emotional intelligence is, why it matters, and how to develop and apply it in our daily lives.</p>

                    <p className="text-xl font-bold paragraph ">Understanding emotional Intelligence</p>
                    <p className="my-1 w-full paragraph">Emotional intelligence can be broken down into five key components, as proposed by psychologists Peter Salovey and John Mayer, and later popularized by Daniel Goleman:</p>
                    <div>{blogs}</div>

                    <p className="text-xl font-bold paragraph">Conclusion</p>
                    <p className="my-1 w-full paragraph text-justify">Emotional intelligence is not just a soft skill; it's a crucial tool for navigating the complexities of human interactions and achieving personal success and satisfaction. By developing and applying emotional intelligence, we can cultivate stronger relationships, communicate effectively, lead with empathy, and foster our own well-being. As we continue to strive for growth and excellence, let's remember that nurturing our emotional intelligence can be the key to unlocking a more enriching and fulfilling life.</p>
                </div>
                <div className="bg-white lg:w-1/2 md:w-1/2 sm:w-full lg:mt-0 md:mt-0 sm:mt-20 p-8 rounded-xl">
                    <div className="flex items-center justify-between w-full">
                        <p className="text-xl font-bold paragraph">Recent News</p>
                        <form className=" lg:flex items-center justify-center gap-x-2 bg-white py-2 px-2 rounded-full overflow-hidden border-2 border-black w-1/2 md:flex sm:hidden">
                            <IoSearchOutline className="text-2xl" />
                            <input type="text"  placeholder="Search for News" className="bg-transparent outline-none " />
                        </form>
                    </div>
                    <div>{news}</div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}
export default Blogs;