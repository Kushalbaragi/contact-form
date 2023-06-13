import React from 'react'

function Success({submitHandler}) {
  return (
    <div className='container text-center success-page'>
       <div className='icon'><i className="fi fi-ss-check-circle"></i></div>
        <h2>Thank you!</h2>
        <p className='mb-4'>Your message has been sent. Our support team will respond within 24 hour</p>
        <button className='w-100 btn btn-dark' onClick={()=>{
                    submitHandler();
                }}>Done</button>
    </div>
  )
}

export default Success;