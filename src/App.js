import "./App.css";
import Nav from "./components/nav/nav.jsx";
import Footer from "./components/footer/Footer.jsx";
import HomePage from "./components/home-page/home-page.jsx";

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
