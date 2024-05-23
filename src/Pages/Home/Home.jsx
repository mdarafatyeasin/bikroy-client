// import Slider from "./Slider/Slider";
import sell from "../../assets/sell.png";
import job from "../../assets/job.png";
import "./Home.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-section">
        {/* banner */}

        {/* card */}
      <div className="home-card-section">
        <div className="nav-card">
          <div className="product-card">
            <div className="card-img">
              <img src={sell} alt="" />
            </div>
            <div className="card-text">
              <h1>Start making money!</h1>
              <p>
                Do you have something to sell? Post your first ad and start
                making money!
              </p>
              <NavLink to='ad-post' className="add-button">Post your ad for free</NavLink>
            </div>
          </div>

          <div className="job-card">
            <div className="card-img">
              <img src={job} alt="" />
            </div>
            <div className="card-text">
              <h1>Get a job!</h1>
              <p>
                Looking to hire or get hired in Bangladesh? Get access to 800k+
                CVs or browse through 800+ job vacancies!
              </p>
              <NavLink className="job-button">Explore more</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
