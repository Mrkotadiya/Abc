import React ,{useState} from "react";
import Popup from "./Popup";
import "./navbar.css";
import Form from "./Form";

function Navbar(){

  const [buttonPopup, setButtonPopup] = useState(false);
    return (
      <div>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <h3>Employee</h3>
            <div className="d-flex">
              <button className="btn btn-primary m-2">...</button>
              <button className="btn btn-primary m-2">--</button>
              <div className="main">
        <main>

              <button className="btn btn-warning m-2" onClick={()=> setButtonPopup(true)}>+ Add Employee</button>
        </main>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              
            <Form>

            </Form>
              </Popup>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  
}

export default Navbar;
