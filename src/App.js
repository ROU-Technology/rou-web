import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/nav/nav.js";
import Footer from "./components/footer/Footer.js";
import AboutPage from "./components/About/About";
import HomePage from "./components/home-page/home-page.js";
import Page404 from "./components/404Page";

function App() {
  return (
    <div className="App ">
      <header className="header">
        <Nav></Nav>
      </header>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
