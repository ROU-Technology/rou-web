import "./App.css";
import Nav from "./components/nav/nav.js";
import Footer from "./components/footer/Footer.js";
import HomePage from "./components/home-page/home-page.js";

function App() {
  return (
    <div className="App ">
      <header className="header">
        <Nav></Nav>
      </header>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
