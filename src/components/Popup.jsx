import React from 'react';
import "./Popup.css";


function Popup(props) {
  return (props.trigger)? (
    <div className='popup'> 
        <div className="popup-inner">
          {/* <form action="">
            <div className='leftColumn'>
                <label htmlFor="">First Name:</label>
                <input type="text" />
            </div>
          </form> */}
                <button className="submit-btn" onClick={()=> props.setTrigger(false)}>x</button>
                <h3>Add Employee</h3>
                {props.children}
            </div>
    </div>
  ):"";
}

export default Popup