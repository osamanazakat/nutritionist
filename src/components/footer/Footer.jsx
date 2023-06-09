import "./Footer.scss";
import { Logo } from "../../assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Wrapper from "../../components/wrapper/Wrapper";
import Button from "../../components/button/Button";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer">
      <Wrapper className="footer__container">
        <div className="footer__col-1 col">
          <img src={Logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur dolol drakgonil adipiscing
            elit aliquam mauris.
          </p>
          <h3>Social media</h3>
          <div className="footer__icons">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaInstagramSquare />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaYoutube />
            </span>
          </div>
        </div>

        <div className="footer__col-2 col">
          <h3>Menu</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer__col-3 col">
          <AiOutlineMail />
          <h3>Subscribe to our newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet ectetur dolol dranil adipiscing elit ali.
          </p>

          <form>
            <input type="email" placeholder="Enter your email" />
          </form>
        </div>
      </Wrapper>
    </section>
  );
};

export default Footer;
