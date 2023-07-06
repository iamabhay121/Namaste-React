

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

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li><i class="fa-solid fa-cart-shopping"></i></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;