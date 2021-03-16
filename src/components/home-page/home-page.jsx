import { Fragment } from 'react'
import "./home-page.css"
import kid from "../../asset/images/kid.svg"
import circle from "../../asset/images/circle.svg"

const HomePage = () => {
  return (
    <Fragment>
       <section>
          <div className="hero">
          <div className="row hero-div">
            <div className="hero-1 col-md-5">
               <h1 className="future">Taking you to  the future</h1>
                 <p className="future-p">
                   Learn, grow and expand your skills through affordable
                   and online courses in Programming and Artifical Intelligence.
                 </p>
                 <button className="btn btn-rou-2" type="click">
                   <a className="btn-rou-2" href="/Join">
                     Join Rou Tech
                   </a>
                 </button>
            </div>
            <div className="hero-2 col-md-5">
               <div className="img-1">
                  <img src={kid} alt="kid" />
               </div>
               <div className="img-2">
                  <img src={circle} alt="process" />
               </div>
            </div>
          </div>
          </div>
       </section>
    </Fragment>
  )
}

export default HomePage;
