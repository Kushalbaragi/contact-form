import React, { useState } from "react";
import Success from './success'
import Form from "./form";

function Contact() {
    let [submit,setSubmit]=useState(false);
    function handler(){
        setSubmit(!submit);
    }
  return (
    <>
      <div className="container my-5 contact-page">
        <h1 className="">Contact us</h1>
        <p className="mb-0">We love questions and feedback- and we're always happy to help!</p>
        <p >Here are some ways to contact us</p>
        <form className="container mt-4 bg-body-secondary w-100 h-100vh rounded">
          <div className="row border border-dark-subtle px-3 rounded">
            <div className="col-lg-8 col-md-12 py-4 left">
                {
                    submit ?       <Success submitHandler={handler}/> :       <Form submitHandler={handler}/>
                }


            </div>

            <div className="col-lg-4 col-md-12 p-4">
                <h3>Contact information</h3>
                <hr/>
               <div className="address-wrapper">
                <ul>
                    <li>   <i className="fi fi-rs-marker"></i>177 Huntington Ave Ste 1703</li>
                    <li> <i className="fi fi-rr-envelope"></i>contact-us@company.com</li>
                    <li> <i className="fi fi-rr-phone-call"></i>+1-617-555-0108</li>
                </ul>
               </div>
                <hr/>
                <ul className='social-wrapper'>
                <li><a href='#' className='twitter'><i className="fi fi-brands-twitter"></i></a></li>
                <li><a href='#' className='instagram'><i className="fi fi-brands-instagram"></i></a></li>
                <li><a href='#' className='facebook'><i className="fi fi-brands-facebook"></i></a></li>
               </ul>


            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
