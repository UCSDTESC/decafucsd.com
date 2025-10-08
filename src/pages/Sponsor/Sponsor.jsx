import "./Sponsor.css";
import CoffeeMug from "../../assets/CoffeeMug.svg";
import sponsors from "./Sponsors.json";
function Sponsor() {
  return (
    <div className="sponsor" id="sponsor">
      <div className="title">
        <p>Sponsors</p>
      </div>
      <div className="content">
        <p>Annual</p>
        <div className="annual">
          {sponsors.Annual.map((sponsor, idx) => {
            return (
              <a
                key={`annual-` + idx}
                href={sponsor.Website || "#"}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="sponsor-item">
                  <img src={sponsor.Logo} alt={sponsor.name}></img>
                </div>
              </a>
            );
          })}
        </div>
        <p>Platinum</p>
        <div className="plat">
          {sponsors.Platinum.map((sponsor, idx) => {
            return (
              <a
                key={`plat-` + idx}
                href={sponsor.Website || "#"}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="sponsor-item">
                  <img src={sponsor.Logo} alt={sponsor.name}></img>
                </div>
              </a>
            );
          })}
        </div>
        <p>Gold</p>
        <div className="gold">
          {sponsors.Gold.map((sponsor, idx) => {
            return (
              <a
                key={`gold-` + idx}
                href={sponsor.Website || "#"}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="sponsor-item">
                  <img src={sponsor.Logo} alt={sponsor.name}></img>
                </div>
              </a>
            );
          })}
        </div>
        {/* <p>Silver</p>
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
        </div> */}
      </div>
    </div>
  );
}

export default Sponsor;
