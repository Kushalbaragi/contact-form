import React from "react";

function Popup({ Message,popupHandler }) {
  return (
    <div className="popup-wrapper">
      <div className="popup">
      <i class="fi fi-sr-seal-exclamation"></i>
        <p>{Message}</p>
        <button className='btn btn-dark' onClick={popupHandler}>OK</button>
      </div>
    </div>
  );
}

export default Popup;
