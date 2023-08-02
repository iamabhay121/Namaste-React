
import { useState } from "react";
import FoodLogo from "../../src/utils/Images/foodlogo.png";


// Title component for display logo
const Title = () => (
    <>
      <a href="/">
        <img className="logo" src={FoodLogo} alt="Food Logo" />
      </a>
      <p className="title">Meal Drop</p>
    </>
);

const myStyle = {
  padding:"10px 20px",
  marginRight:"30px",
  fontSize: "18px",
  fontFamily: "Ariel",
  borderRadius:"12px",
  backgroundColor:"#d0d0d0",
  cursor:"pointer",
}

// Header component for header section: Logo, Nav Items
const Header = () => {

  const [btnName, setbtnName] = useState("Login")
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <button style={myStyle} onClick={()=>{
             btnName==="Login" ? setbtnName("Log Out"): setbtnName("Login");
          }} >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;