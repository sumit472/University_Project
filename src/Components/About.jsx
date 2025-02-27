import "./About.css";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="aboutFirst">
          <div className="left">
            <div className="leftBox"></div>
            <div className="leftButton">
              <div className="brainstorming"></div>
              <div className="text">
                <p>30 Years Of Quality Service</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="rightImage">
              <div className="img"></div>
            </div>
            <div className="rightBox"> </div>
          </div>
        </div>
        <div className="aboutSecond">
          <div className="aboutSection">
            <div className="book1">
              <i class="fa-solid fa-book-open"></i>
              &nbsp; &nbsp;
              <span>ABOUT US</span>
            </div>
            <h1>
              Empowering Students to <span className="achieves">Achieves</span>{" "}
              Dreams.
            </h1>
            <p>
              Our University is dedicated to fostering an educational
              environment that promotes personal growth, innovation, and
              academics excellence.
            </p>
            <div className="services">
              <div className="servicesImg"></div>
              &nbsp; &nbsp;
              <div className="academicHeading">
                <h3>Academic Excellence</h3>
              </div>
            </div>
            <div className="para1">
              <p>
                Our faculty, resources and state-of-the facilities ensure that
                students have access to everyThing they need to success and
                thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
