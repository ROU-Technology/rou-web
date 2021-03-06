import { Fragment } from "react";
import "./HomePage.css";
import kid from "../../asset/images/kid.png";
import lady from "../../asset/images/lady.jpg";
import lady2 from "../../asset/images/lady2.jpg";
import guy2 from "../../asset/images/guy2.jpg";
import back from "../../asset/images/Group 110.svg";
import next from "../../asset/images/Group 111.svg";
import Carousels from "./Carousel/Carousel";
import Courses from "./Courses/Courses";
import Team from "./Teams/Team";
import ww_1 from "../../asset/images/ww2.jpg";
import ww_2 from "../../asset/images/ww3.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  const img = [lady, lady2, guy2];
  const word = [
    "Through flexible, intensive and affordable courses, get a personalized and relevant syllabus trained by experts who will enable you to understand and apply the skills you obtain .",
    "After learning, ROU Tech links you to an exclusive job portal on the platform and provides support in implementing your ideas for your startup.",
    "Our platform is designed to support and aid learners who may have visual, hearing, cognitive or motor impairments, so as to have a more diverse workforce in the Technology Industry.",
  ];
  const head = ["Flexible", "Attractive", "Accessible"];

  return (
    <Fragment>
      <section>
        <div className="hero">
          <div className="row hero-div">
            <div className="hero-1 col-md-5 col-sm-11">
              <h1 className="future"> Taking you to the future </h1>
              <p className="future-p">
                Learn, grow and expand your skills through affordable, online
                and onsite courses and programs in Programming and Artificial
                Intelligence for all levels of Education and Anyone.
              </p>
              <button className="btn btn-rou-2" type="click">
                <Link className="btn-rou-2" to="/programs">
                  Join Rou Tech
                </Link>
              </button>
            </div>
            <div className="hero-2 col-md-6">
              <div className="img-1">
                <img src={kid} alt="kid" className="img-responsive" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="Carousel-1">
          <div className="Carousel-on">
            <div className="Carousel-1-1">
              <Carousels img={img} />
            </div>
            <div className="Carousel-1-2">
              <Carousels word={word} head={head} />
            </div>
          </div>
        </div>
      </section>
      <div className="button">
        <button className="btn btn-rou-3" type="click">
          <Link className="btn-rou-3" to="/programs">
            Join Rou Tech
          </Link>
        </button>
      </div>

      <div className="w-word">
        <div className="w-word-1">
          <img src={ww_1} alt="img-w" className="w-word-img" />
          <div className="w-word-1-w w-word-w">
            <p className="w-word-1-p w-word-p">
              The Future of your kids start now, Even if your child will not
              work in a tech related field. <br />
              Giving him/her a touch of technology is a great investment into
              his/her future
            </p>
            <button className="btn w-word-1-btn w-word-btn">
              <Link className="w-b" to="/about#contact">
                Consult us Today
              </Link>
            </button>
          </div>
        </div>
        <div className="w-word-2">
          <img src={ww_2} alt="img-w" className="w-word-img" />
          <div className="w-word-1-w w-word-w">
            <p className="w-word-2-p w-word-p">
              {" "}
              At ROU Technology we wil help train your student and make them
              prepare for the future. We train at all levels of education, from
              the primary sector to the secondary sector. <br />
              You can bring Technology to your school today.
            </p>
            <button className="btn w-word-2-btn w-word-btn">
              <Link className="w-b" to="/about#contact">
                Consult us Today
              </Link>
            </button>
          </div>
        </div>
        <button className="btn-w-word">
          <Link to="/about#contact">Consult us Today</Link>
        </button>
      </div>

      <Courses />

      <div id="about">
        <div id="about-b">
          <p className="p-about">
            We are a company, working together to help Youths make their dreams
            come true by imparting futuristic skills. We started ROU Tech, to
            eliminate the barrier between you and your dreams. We wished we
            could have known about Programming and Artificial Intelligence much
            earlier, and gotten the skills at a much cheaper price, but how
            blessed and fortunate we are to now partner with gurus in the Tech
            field, to make this wish come true.
          </p>
          <p className="p-about p4">We believe in the African Youth, do you?</p>
        </div>
      </div>
      <Team />
      <div className="bridge br">
        <div className="bridge bk">
          <img src={back} className="arrow" alt="arrow" />
          <div className="bridge-b">
            <p className="bridge-p">Want to join our team?</p>
            <button className="btn bridge-btn">
              <Link to="/volunteer">Volunteer with ROU Tech</Link>
            </button>
          </div>
          <img src={next} className="arrow" alt="arrow" />
        </div>
        <button className="btn bridge-btn-2">
          <Link to="/volunteer">Volunteer with ROU Tech</Link>
        </button>
      </div>
      <div className="quote">
        <div className="quote-b">
          <p className="p-quote p1">
            Programing and Artificial Intelligence are the skills our Youth
            need, not because they are cool, but, because they are the very
            definition of revolution.
          </p>{" "}
          <p className="p-quote p2">
            Africa and the whole wide world is counting on you to make that
            revolution a living reality.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
