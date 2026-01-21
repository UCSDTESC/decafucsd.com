import Header from "./Header";
import "./Home.css";

function Home() {
  return (
    <div className="home" id="home">
      <Header />
      <div className="content">
        <div className="title">
          <p id="heading">DECaF Winter 2026</p>
          <p id="subheading">Disciplines of Engineering Career Fair</p>
          <p id="venue">Price Center Ballroom West A, UC San Diego</p>
          <p id="venue">January 20th, 2026</p>
          <div className="buttons">
            <div className="button-group">
              <div className="button" id="student">
                {/* Student Registration */}
                {/* <a href="https://forms.gle/yv2mvtdAvCzD3hN37" target="_blank" rel="noreferrer">
                  Student Registration
                </a>  */}
                Student Registration
              </div>
              <p className="deadline">Registration Closed</p>
            </div>
            <div className="button-group">
              <div className="button" id="company">
             
                {/* <a href="https://forms.gle/yxdVtcHmMG8gGMJh8" target="_blank" rel="noreferrer">
                Company Registration</a> */}
                Company Registration
              </div>
              <p className="deadline">Registration Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
