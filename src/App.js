import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/nav/nav.js";
import Footer from "./components/footer/Footer.js";
import HomePage from "./components/home-page/home-page.js";

function App() {
  return (
    <div className="App ">
      <header className="header">
        <Nav></Nav>
      </header>
      <Route path="/" exact component={HomePage} />
      <Route component={HomePage} />
      {/* <Switch>
        <Route path="/courses" component={CoursePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course/" component={ManageCoursePage} />
        <Redirect from="/about-page" to="about" />
      </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
