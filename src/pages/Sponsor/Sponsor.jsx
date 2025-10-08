import "./Sponsor.css";
import CoffeeMug from "../../assets/CoffeeMug.svg";
import TSMC from "../../logos/TSMC-logo.png";
import Keller from "../../logos/Keller-North-America.png";
import Freeform from "../../logos/Freeform-logo.png";
import Viasat from "../../logos/Viasat_2018_Gradient_Web (1).jpg";

function Sponsor() {
  return (
    <div className="sponsor" id="sponsor">
      <div className="title">
        <p>Sponsors</p>
      </div>
      <div className="content">
        <p>Platinum</p>
        <div className="plat">
          <div>
            <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
            Future Sponsor
          </div>
          <div>
            <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
            Future Sponsor
          </div>
        </div>
        <p>Gold</p>
        <div className="gold">
          <div>
            <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
            Future Sponsor
          </div>
          <div>
            <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
            Future Sponsor
          </div>
        </div>
        <p>Silver</p>
        <div className="silver">
          <div>
            <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
            Future Sponsor
          </div>
          <div>
            <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
            Future Sponsor
          </div>
          {/* <a href="https://www.keller-na.com">
            <div className="sponsor-item">
              <img src={Keller} alt="Keller logo"></img>
            </div>
          </a> */}
          {/* <a href="https://freeform.co">
            <div className="sponsor-item" id="bg-black">
              <img src={Freeform} alt="Freeform logo"></img>
            </div>
          </a> */}
          {/* <a href="https://www.viasat.com">
            <div className="sponsor-item">
              <img src={Viasat} alt="Viasat logo"></img>
            </div>
          </a> */}
        </div>
        <p>Bronze</p>
        <div className="bronze">
          <div>
            <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
            Future Sponsor
          </div>
          <div>
            <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
            Future Sponsor
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
