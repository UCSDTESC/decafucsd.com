import Header from "./Header";
import "./Home.css";

function Home() {
  return (
    <div className="home" id="home">
      <Header />
      <div className="content">
        <div className="title">
          <p id="heading">DECaF Fall 2025</p>
          <p id="subheading">Disciplines of Engineering Career Fair</p>
          <p id="venue">Price Center Ballroom West AB, UC San Diego</p>
          <p id="venue">October 14th 2025, 10am - 2pm</p>
          <div className="buttons">
            <div className="button-group">
              <div className="button" id="student">
                Student Registration
                {/* <a
                  href="https://forms.gle/RaBE864RhoT84fwV9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Student Registration
                </a> */}
              </div>
              <p className="deadline">Registration Opens Soon</p>
            </div>
            <div className="button-group">
              <div className="button" id="company">
                {/* Company Registration */}
                <a
                  // href="https://docs.google.com/forms/d/1yd30YZFGGzJuseup9kkmxMWH64UlgqnSwPr59grt-C4/"
                  href = "https://forms.gle/dnzUn6cttkZD3nFz8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Company Registration
                </a>
              </div>
              <p className="deadline">Registration Open</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
