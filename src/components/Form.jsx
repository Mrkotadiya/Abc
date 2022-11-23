import React, { useState } from "react";
import Employee, { MyemployeeData } from "./employe";
import "./Form.css";

function Form() {
  let dataobj = {};
  let dataarr =[];

  const [submit, setSubmit] = useState([]);
  function Datasubmit(e){
    dataarr.push(dataobj);
    dataobj = {};
    console.log(dataarr);
    MyemployeeData(dataarr);
    document.getElementById("myform").reset();
  }
  function HendleChange (e) {
    dataobj = {...dataobj ,...{[e.target.name]:e.target.value}}
  }
  console.log(dataarr);
  return (
    <div>
      <form id="myform">
        <div className="leftColumn">
          <label htmlFor="">First Name:</label>
          <input
            type="text"
            name="fname"
            value={submit.fname}
            onChange={HendleChange}
          />
          <label htmlFor="">UserName</label>
          <input
            type="text"
            name="userName"
            value={submit.userName}
            onChange={HendleChange}
          />
          <label htmlFor="">EmployeId</label>
          <input
            type="text"
            name="employeId"
            value={submit.employeId}
            onChange={HendleChange}
          />
          <label htmlFor="">contactNo</label>
          <input
            type="number"
            name="contactNo"
            value={submit.contactNo}
            onChange={HendleChange}
          />
          <label htmlFor="">DepartMent</label>
          <input
            type="text"
            name="department"
            id=""
            value={submit.department}
            onChange={HendleChange}
          />
        </div>
        <div className="rightColumn">
          <label htmlFor="">Last Name:</label>
          <input
            type="text"
            name="lname"
            value={submit.lname}
            onChange={HendleChange}
          />
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            value={submit.email}
            onChange={HendleChange}
          />
          <label htmlFor="">JoinDate</label>
          <input
            type="date"
            name="joinDate"
            value={submit.joinDate}
            onChange={HendleChange}
          />
          <label htmlFor="">Company</label>
          <input
            type="text"
            name="company"
            value={submit.company}
            onChange={HendleChange}
          />
          <label htmlFor="">Designation</label>
          <input
            type="text"
            name="designation"
            id=""
            value={submit.designation}
            onChange={HendleChange}
          />
        </div>
      </form>
      <div>
        <button id="button" type={"reset"} onClick={Datasubmit}>
          submit
        </button>
      </div>
    </div>
  );


}

export default Form;
