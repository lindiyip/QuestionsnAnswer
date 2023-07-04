import portrait from "../../assets/images/portrait.jpg";
import myprofile from "../../assets/images/myprofile.png";
import exit from "../../assets/images/exit.png";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';

const Welcome = ({ currentUser, currentUserStatus}) => {

  const[open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(()=> {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)){
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return()=>{
      document.removeEventListener("mousedown", handler);
    }
  })

  return (
    <div className="menu-container" ref={menuRef}>
      <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
        <img src={portrait}></img>
      </div>
      
      <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
        <h3>{currentUser}<br/><span> {currentUserStatus} </span></h3>
        <ul>
          <Link to={`/AboutMe`}>
            <DropdownItem img={myprofile} text={"My Profile"}/>
          </Link>
          <DropdownItem img={exit} text={"Logout"}/>
        </ul>
      </div>

      
    </div>
  );
};

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a>{props.text}</a>
    </li>
  );
}
export default Welcome;
