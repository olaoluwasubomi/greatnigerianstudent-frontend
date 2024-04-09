import React, { useState } from "react";
import Nav from "../Navigation/Nav";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import facultydata from "./facultydata";
import unidata from "./unidata";
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";

const University = () => {
  const [showCourses, setShowCourses] = useState(Array(facultydata.length).fill(false));

  const toggleCourses = (index) => {
    const updatedShowCourses = [...showCourses];
    updatedShowCourses[index] = !updatedShowCourses[index];
    setShowCourses(updatedShowCourses);
  };

  const uniinformation = unidata.map((item, i) => {
    return (
      <div key={i} className="bg-white lg:w-1/2 md:w-full sm:w-full rounded-t-xl items shadow-lg rounded-xl lg:mt-0 md:mt-0">
        <div className="flex items-end justify-end w-full flex-col relative">
          <img src={item.uniImage} className="w-full" alt={item.heading} />
          <p className="datebg absolute lg:top-64 md:top-64 sm:top-60 p-3 lg:w-2/5 md:w-1/2 sm:w-1/2 text-center rounded-s-3xl text-white font-bol">{item.date}</p>
        </div>
        <h6 className="mt-10 px-5 font-bold text-xl paragraph">{item.heading}</h6>
        <a href="#" className="px-5 flex items-center justify-start gap-x-2 mt-10 pb-3 secondcolor">{item.link} <IoIosArrowRoundForward className="text-2xl" /></a>
      </div>
    );
  });

  const courses = facultydata.map((course, i) => {
    return (
      <div key={i} className="questionbg mt-4 w-1/3 mx-auto py-3 px-5 rounded-xl courses">
        <div className="flex items-center justify-between">
          <h6 className="text-white text-xl capitalize font-normal">{course.facultyName}</h6>
          {showCourses[i] ? <IoIosArrowUp onClick={() => toggleCourses(i)} className="text-xl font-semibold text-white" /> : <IoIosArrowDown onClick={() => toggleCourses(i)}  className="text-xl font-semibold text-white" />}
        </div>
        {showCourses[i] && (
          <ul className="questionbg">
            <li className="mt-5 coursescolor font-bold">{course.course1}</li>
            <li className="mt-5 coursescolor font-bold">{course.course2}</li>
            <li className="mt-5 coursescolor font-bold">{course.course3}</li>
            <li className="mt-5 coursescolor font-bold">{course.course4}</li>
            <li className="mt-5 coursescolor font-bold">{course.course5}</li>
            <li className="mt-5 coursescolor font-bold">{course.course6}</li>
            <li className="mt-5 coursescolor font-bold">{course.course7}</li>
            <li className="mt-5 coursescolor font-bold">{course.course8}</li>
            <li className="mt-5 coursescolor font-bold">{course.course9}</li>
            <li className="mt-5 coursescolor font-bold">{course.course10}</li>
            <li className="mt-5 coursescolor font-bold">{course.course11}</li>
          </ul>
        )}
      </div>
    );
  });

  return (
    <div className="abooutbg">
      <div className="relative px-12 lg:px-12 lg:py-5 md:px-10 sm:px-2">
        <Nav />
        <img src="/images/Vector.png" className="absolute right-0 w-32  lg:block md:block sm:hidden mt-10" alt="Vector" />
        <h2 className="text-center text-5xl mt-24 capitalize font-bold w-1/4 leading-relaxed mx-auto lg:w-1/3 md:w-1/4 sm:w-full lg:text-5xl md:text-5xl sm:text-4xl">University  of Lagos</h2>
      </div>

      <div className="flex justify-center items-center w-full mt-5 sm:flex-col md:flex-row lg:flex-row gap-x-20">
        <div className="flex items-start justify-center sm:flex-row md:flex-col lg:flex-col sm:w-full md:w-2/3 lg:w-2/3">
          <img src="/images/Maskgroup.png" className="lg:pl-40 md:pl-20 sm:pl-0 sm:w-9/12 lg:w-full md:w-full" alt="Maskgroup" /> 
          <div className="flex relative bottom-8 gap-x-2 sm:flex-col md:flex-row lg:flex-row sm:items-center md:items-start lg:items-start sm:gap-y-1 sm:justify-center md:justify-start lg:justify-start sm:mt-10 md:mt-0 lg:mt-0">
            <img src="/images/Rectangle7.png" className="lg:block md:block sm:hidden" alt="Rectangle7" />
            <img src="/images/Rectangle8.png" className="lg:block md:block sm:hidden" alt="Rectangle8" />
            <img src="/images/Rectangle7(1).png" className="lg:hidden md:hidden sm:block" alt="Rectangle7(1)" />
            <img src="/images/Rectangle8(1).png" className="lg:hidden md:hidden sm:block" alt="Rectangle8(1)"  />
          </div>
        </div>
        <div className="w-full">
          <p className="lg:w-2/3 md:w-full sm:w-full text-justify paragraph font-bold lg:px-0 md:px-0 sm:px-10 ">The University of Lagos, popularly known as UNILAG, is a public research university located in Lagos, Nigeria and was founded in 1962. UNILAG is one of the first generation universities in Nigeria and is ranked among the top universities in the world in major education publications.</p>
          <p className="mt-5 paragraph font-bold lg:px-0 md:px-0 sm:px-10"><span className="secondcolor">Location: </span>University Road Lagos Mainland Akoka, Yaba, Lagos</p>
          <Link className="flex items-center justify-start gap-x-1 mt-2 font-bold secondcolor lg:px-0 md:px-0 sm:px-10" to="/Aboutuni">Read More <IoIosArrowRoundForward className="text-3xl" /></Link>
        </div>
      </div>

      <div className="lg:px-40 md:px-10 sm:px-10 lg:mt-20 md:mt-10 sm:mt-10">
        <h5 className="lg:text-5xl md:text-5xl sm:text-3xl text-center font-bold paragraph capitalize lg:w-1/2 md:w-1/2 sm:w-full mx-auto">Latest Updates on university of Lagos</h5>
        <div className="lg:my-20 md:my-20 sm:my-10 flex items-start justify-between w-full gap-x-40  lg:flex-row md:flex-col sm:flex-col">
          {uniinformation}
        </div>
        <div className="my-20  flex items-start justify-between w-full gap-x-40">
          {uniinformation}
        </div>
      </div>

      <div>
        <h6 className="text-5xl text-center font-bold paragraph w-2/5 mx-auto capitalize">Faculty & Department In the University of Lagos</h6>
        <div className="mx-auto my-10">
          {courses}
        </div>
      </div>


      <Footer />      
    </div>
  );
};
export default University;