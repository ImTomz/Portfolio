import React, { useState } from "react";
import "./style/style.css";
import { Switch, Route, useHistory, withRouter } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Works from "./components/Works/Works";
import LeftNav from "./components/LeftNav/LeftNav";
import Header from "./components/Header/Header";
import HireMe from "./components/HireMe/HireMe";
import BurgerNav from "./components/BurgerNav/BurgerNav";
import Error from "./components/Error/Error";
import { CSSTransition } from "react-transition-group";

function App() {
  //Page showing state
  const [page, setPage] = useState("/");
  //Can scroll state 1.2s timeout set in handleScroll
  const [scrolled, setScrolled] = useState(false);
  //Burger nav state
  const [burgerPressed, setBurgerPressed] = useState(false);
  //History of router
  const history = useHistory();

  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
    { path: "/works", name: "Works", Component: Works },
    { path: "/hire", name: "Hire", Component: HireMe },
    { path: "/*/:?", name: "Error", Component: Error },
  ];

  //Scrolling trough routs
  const handleScroll = (event) => {
    if (event.deltaY < 0 && scrolled === false && burgerPressed === false) {
      switch (page) {
        case "/hire":
          history.push("/about");
          setScrolled(true);
          setPage("/about");
          setTimeout(() => {
            setScrolled(false);
          }, 1200);
          break;

        case "/about":
          history.push("/works");
          setScrolled(true);
          setPage("/works");

          setTimeout(() => {
            setScrolled(false);
          }, 1200);
          break;

        case "/works":
          history.push("/");
          setScrolled(true);
          setPage("/");
          setTimeout(() => {
            setScrolled(false);
          }, 1200);
          break;

        case "/":
          history.push("/hire");
          setScrolled(true);
          setPage("/hire");
          setTimeout(() => {
            setScrolled(false);
          }, 1200);
          break;
        default:
          break;
      }
    } else if (
      event.deltaY > 0 &&
      scrolled === false &&
      burgerPressed === false
    ) {
      switch (page) {
        case "/":
          history.push("/works");
          setScrolled(true);
          setPage("/works");
          setTimeout(() => {
            setScrolled(false);
          }, 1200);
          break;

        case "/works":
          history.push("/about");
          setScrolled(true);
          setPage("/about");
          setTimeout(() => {
            setScrolled(false);
          }, 1200);
          break;

        case "/about":
          history.push("/hire");
          setScrolled(true);
          setPage("/hire");
          setTimeout(() => {
            setScrolled(false);
          }, 1200);
          break;

        case "/hire":
          history.push("/");
          setScrolled(true);
          setPage("/");
          setTimeout(() => {
            setScrolled(false);
          }, 1200);
          break;

        default:
          break;
      }
    }
  };

  //Set page state on btn click
  const handleChange = (data) => {
    setPage(data);
    //If its pressed from burger close the burger
    if (burgerPressed) {
      setBurgerPressed(false);
    }
  };

  //Set burger pressed state
  const handleBurgerPressed = () => {
    setBurgerPressed(!burgerPressed);
  };

  const onEnter = (node) => {
    console.log(node);
  };
  const onExit = (node) => {
    console.log(node);
  };

  return (
    <div className="App" onWheel={handleScroll}>
      {burgerPressed && <BurgerNav onChangePage={handleChange} />}
      <Header
        onChangePage={handleChange}
        onBurgerPressed={handleBurgerPressed}
        isOpen={burgerPressed}
      />
      <div className="flex-container">
        <LeftNav onChangePage={handleChange} />
        <>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="fade"
                  onEnter={onEnter}
                  onExit={onExit}
                  unmountOnExit
                >
                  <div className="fade">
                    <Component onChangePage={handleChange} />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </>
      </div>
    </div>
  );
}

export default App;
