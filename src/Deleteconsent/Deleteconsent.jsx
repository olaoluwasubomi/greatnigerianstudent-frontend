import React from "react"
import { ReactDOM } from "react"
import Nav from "../Privacy/Nav"
const Deleteconsent = () =>{
    return(
        <div>
            <Nav />
            <div className="bg-white p-10 lg:w-2/3 md:w-full sm:w-full mx-auto rounded-xl shadow-lg">
                <p>To request the deletion of your account and associated data, please send an email to <a href="deleteaccount@greatnigerianstudents.com" className="inline text-blue-500">deleteaccount@greatnigerianstudents.com</a> with the subject line "Account Deletion Request." <p className="mt-5"> In the email, please include the following information:</p>
                <ol>
                    <li className="mt-5">Your full Name:</li>
                    <li className="mt-5">Your email address:</li>
                    <li className="mt-5">Name of Institution:</li>
                </ol>
                <p className="mt-5">We will process your request as soon as possible and notify you once it's completed.</p> 
                <p className="mt-5"> Thank you. </p>  
                <p className="mt-5">If this request is urgent, consider filling this form. <a href="https://forms.gle/yG3oChYRdkFproEy7" className="inline text-blue-500">https://forms.gle/yG3oChYRdkFproEy7</a> </p>
                </p>
            </div>
        </div>
    )
}
export default Deleteconsent;