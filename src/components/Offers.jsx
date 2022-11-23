import React from "react";
import "./offers.css";

function Offer(props) {
  return (
    <tr>
      <td><img src={`${props.img}`} alt={"sorry"}/></td>

      <td>{props.name}</td>

      <td>{props.employeId}</td>

      <td>{props.email}</td>

      <td>{props.mobileno}</td>

      <td>{props.joinDate}</td>

      <td>{props.role}</td>
    </tr>
  );
}

export default Offer;
