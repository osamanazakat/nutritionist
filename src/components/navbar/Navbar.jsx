import "./Navbar.scss";
import Wrapper from "../wrapper/Wrapper";
import { Logo, Cart } from "../../assets";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <Wrapper>
      <nav className="navbar">
        <Link>
          <img src={Logo} alt="" className="navbar__logo" />
        </Link>

        <ul className="navbar__links">
          <li>
            <Link className="navbar__link">Home</Link>
          </li>
          <li>
            <Link className="navbar__link">About</Link>
          </li>
          <li>
            <Link className="navbar__link">Blog</Link>
          </li>
          <li>
            <Link className="navbar__link">Shop</Link>
          </li>
          <div className="navbar__cart">
            <img src={Cart} alt="cart" />
            <div>
              <span>0</span>
            </div>
          </div>
          <Button className="btn-black">Browse Plans</Button>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
