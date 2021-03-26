import { Fragment } from "react";
import "./home-page.css";
import kid from "../../asset/images/kid.png";
import lady from "../../asset/images/lady.jpg";
import lady2 from "../../asset/images/lady2.jpg";
import guy2 from "../../asset/images/guy2.jpg";
import Carousels from "./carousel/carousel.jsx";

const HomePage = () => {
  const img = [lady, lady2, guy2];
  const word = [
    "Through flexible, intensive and affordable courses, get a personalized and relevant syllabus trained by experts who will enable you to undertand and apply the skills you obtain .",
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
                <a className="btn-rou-2" href="/Join">
                  Join Rou Tech
                </a>
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
          <a className="btn-rou-3" href="/Join">
            Join Rou Tech
          </a>
        </button>
      </div>
      <div className="quote">
        <div className="quote-b">
          <p className="p-quote">
            Programing and Artificial Intelligence are the skills our Youth
            need, not because they are cool, but, because they are the very
            definition of revolution. <br></br>Africa and the whole wide world
            is counting on you to make that revolution a living reality.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
