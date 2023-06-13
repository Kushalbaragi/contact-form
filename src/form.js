import React, { useState } from "react";
import Popup from "./Popup";
import { initializeApp } from "firebase/app";
// import firebase from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";


function Form({ submitHandler }) {
  let [emailError, setEmailError] = useState(false);
  let [phoneError, setPhoneError] = useState(false);
  let [popup, setPopup] = useState(false);
  let [popupMessage, setPopupMessage] = useState("");




  function Handler(e) {
    e.preventDefault();
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let phone = document.getElementById("Phone").value;
    let organisation = document.getElementById("Organisation").value;
    let message = document.getElementById("Message").value;




    const firebaseConfig = {
      apiKey: "AIzaSyB8ij3h5Im8wDraoHcWM6pMBd5-bfIUVZc",
      authDomain: "contactform-2a3ef.firebaseapp.com",
      databaseURL: "https://contactform-2a3ef-default-rtdb.firebaseio.com",
      projectId: "contactform-2a3ef",
      storageBucket: "contactform-2a3ef.appspot.com",
      messagingSenderId: "775001205742",
      appId: "1:775001205742:web:b2941db952522d69b57cff"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db=getFirestore(app);

    const userCollectionRef=collection(db,'contactForm');
    addDoc(userCollectionRef,{
      Username :name,
      mail : email
    })

















  

    if (
      emptySring("Name", name) ||
      emptySring("Email", email) ||
      emptySring("Telephone", phone) ||
      emptySring("Organisation", organisation) ||
      emptySring("Message", message)
    ) {
      return null;
    } else if (EmailCheck()) {
      setEmailError(true);
      return null;
    } else if (telephoneCheck()) {
      setPhoneError(true);
      return null;
    } else {
      // console.log(document.getElementById("submitForm"));

      submitHandler();
    }

    //to validate empty fields
    function emptySring(field, str) {
      if (str.length <= 0) {
        setPopup(true);
        setPopupMessage(`${field} field must be filled`);
        return true;
      }
    }

    //to validate the email
    function EmailCheck() {
      if (email.includes("@") && email.includes(".com")) {
        return false;
      } else return true;
    }

    //validate telephone
    function telephoneCheck() {
      if (phone.length === 10) return false;
      else return true;
    }
  }
  return (
    <>
      <h3>Send us a message</h3>
      <p>Send us a message and we'll respond within 24 hour</p>

      <div className="container py-3">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <label className="form-label" htmlFor="name">
              Full Name
            </label>
            <input
              placeholder="Type full name here"
              type="text"
              id="Name"
              name="name"
              className="form-control"
              required
            />
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              placeholder="Type email here"
              type="email"
              id="Email"
              name="email"
              className="form-control"
              required
            />
            <p
              className="error"
              style={{ display: emailError ? "block" : "none" }}
            >
              Invalid Email entered
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <label className="form-label" htmlFor="number">
              Telephone
            </label>
            <input
              placeholder="Phone number"
              type="number"
              id="Phone"
              name="number"
              className="form-control"
              required
            />
            <p
              className="error"
              style={{ display: phoneError ? "block" : "none" }}
            >
              Please enter valid Telephone number
            </p>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <label className="form-label" htmlFor="organisation">
              Organisation
            </label>
            <input
              placeholder="Organisation Name"
              type="text"
              id="Organisation"
              name="organisation"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-4">
            <textarea
              placeholder="Type your message here"
              type="text"
              id="Message"
              name="message"
              className="message form-control"
              required
            />
          </div>
        </div>
        <button
          id="submitForm"
          type="submit"
          className="btn btn-dark float-end"
          onClick={Handler}
        >
          Submit
        </button>
      </div>
      {popup && (
        <Popup
          Message={popupMessage}
          popupHandler={() => {
            setPopup(!popup);
          }}
        />
      )}
    </>
  );
}

export default Form;
