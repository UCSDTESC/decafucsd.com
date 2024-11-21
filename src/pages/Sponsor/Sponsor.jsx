import "./Sponsor.css";
import CoffeeMug from "../../assets/CoffeeMug.svg";
// import L3Harris from "../../logos/L3Harris_Logo.png";
// import Dynovas from "../../logos/Dynovas Matrix Logo (Final).jpg";
// import LLNL from "../../logos/LLNLlogoBLACK.jpg";
// import Viasat from "../../logos/Viasat_2018_Gradient_Web (1).jpg";
// import LANL from "../../logos/LANL_Logo_Temp.png";
// import NTAG_SW from "../../logos/NTAG_SW_Logo.png";

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
        </div>
        <p>Gold</p>
        <div className="gold">
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
