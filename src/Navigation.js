import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Footer from "./Footer";
import Login from "./Login";
import Characters from "./Characters";
import "./styles.css";
import { useState } from "react";

function Navigation() {
  const [activeLink, setActiveLink] = useState("");

  const M = window.M;
  function sidenavTrig() {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  }

  return (
    <Router>
      <div className="">
        <nav className="nav-wrapper">
          <div className="container">
            <Link to="/" className="flow-text">
              Genshin Team Maker
            </Link>
            <a
              href="#"
              onClick={sidenavTrig}
              className="sidenav-trigger"
              data-target="mobile-links"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Contact</a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/wanjongkim/GenshinTactics"
                >
                  GitHub
                </a>
              </li>
              <li
                className={`${activeLink === "/login" ? "active" : ""}`}
                onClick={() => setActiveLink("/login")}
              >
                <Link to="login">Login</Link>
              </li>
              <li
                className={`${activeLink === "/" ? "active" : ""}`}
                onClick={() => setActiveLink("/")}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`${activeLink === "/characters" ? "active" : ""}`}
                onClick={() => setActiveLink("/characters")}
              >
                <Link to="characters">Characters</Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-links">
          <li>
            <Link className="sidenav-close" to="/">
              Home
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="sidenav-close"
              href="https://github.com/wanjongkim/GenshinTactics"
            >
              Github
            </a>
          </li>
          <li>
            <a className="sidenav-close" href="#">
              About
            </a>
          </li>
          <li>
            <Link
              className="sidenav-close"
              to="/characters"
              onClick={() => setActiveLink("/characters")}
            >
              Characters
            </Link>
          </li>
          <li>
            <Link
              className="sidenav-close"
              to="/login"
              onClick={() => setActiveLink("/login")}
            >
              Login
            </Link>
          </li>
          <li>
            <Link className="sidenav-close" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <App />
          <Footer />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
