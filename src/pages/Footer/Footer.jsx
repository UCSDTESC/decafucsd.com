import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./Footer.css";
import Logo from "../../assets/TESCLogo.svg";

function Footer() {
  const contactIcons = (
    <ul className="contact-items">
      <li className="contact-item">
        <a href="mailto:contact@tesc.ucsd.edu" className="contact-icon">
          <MdEmail />
        </a>
      </li>
      <li className="contact-item">
        <a href="https://instagram.com/tesc.at.ucsd/" className="contact-icon">
          <FaInstagram />
        </a>
      </li>
      <li className="contact-item">
        <a href="https://www.linkedin.com/company/tescatucsd/" className="contact-icon">
          <FaLinkedin />
        </a>
      </li>
      <li className="contact-item">
        <a href="https://x.com/UCSDTESC/" className="contact-icon">
          <FaXTwitter />
        </a>
      </li>
      <li className="contact-item">
        <a href="https://tescatucsd.org/discord" className="contact-icon">
          <FaDiscord />
        </a>
      </li>
    </ul>
  );

  return (
    <div className="footer">
      <div className="contact" id="contact">
        <p>Contact us</p>
        {contactIcons}
      </div>
      <div className="tesc">
        <p id="organized">organized by</p>
        <img id="logo" src={Logo} alt="TESC"></img>
        <p id="desc">
          The Triton Engineering Student Council empowers UC San Diego engineering students by
          connecting them with impactful communities, projects, and career building opportunities.
        </p>
      </div>
    </div>
  );
}

export default Footer;
