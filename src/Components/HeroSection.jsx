import { Link } from "react-router-dom";
import style from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <>
      <div className={style.box}>
        <div className={style.first}>
          <div className={style.book}>
            <i className="fa-solid fa-book-open"> </i>
            &nbsp;
            <span className={style.spanned}>Welcome to Home</span>
          </div>

          <h1>
            Start Your <span>Bright</span> Journey With Us
          </h1>
          <p className={style.spanned}>
            There are many variation of passages , but the majority have suffred
            alternative in some form
          </p>
          <div className={style.buttons}>
            <button>
              ABOUT MORE &nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/enroll">
              <button>
                LEARN MORE &nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
        <div className={style.second}></div>
      </div>
    </>
  );
};
export default HeroSection;
