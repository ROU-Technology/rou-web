import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/About/About";
import HomePage from "./components/HomePage/HomePage.js";
import Page404 from "./components/common/404Page";
import ProgramsPage from "./components/Programs/ProgramsPage";
import VolunteerPage from "./components/Volunteer/VolunteerPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessPage from "./components/common/SuccessPage";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <div className="App ">
      <ToastContainer autoClose={3000} hideProgressBar />
      <header className="header">
        <Nav></Nav>
      </header>
      {/* ScrollToTop is used to make the component scroll to the top automatically */}
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/programs" component={ProgramsPage} />
        <Route path="/volunteer" component={VolunteerPage} />
        <Route path="/sus" component={SuccessPage} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
