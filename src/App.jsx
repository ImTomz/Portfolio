import React, { useState } from "react";
import "./style/style.css";
import { Route, Switch, useHistory, withRouter } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Works from "./components/Works/Works";
import LeftNav from "./components/LeftNav/LeftNav";
import Header from "./components/Header/Header";
import HireMe from "./components/HireMe/HireMe";
import BurgerNav from "./components/BurgerNav/BurgerNav";
import Error from "./components/Error/Error";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import gsap from "gsap";

const App = withRouter(({ location }) => {
  //Page showing state
  const [page, setPage] = useState("/");
  //Can scroll state 1.2s timeout set in handleScroll
  const [scrolled, setScrolled] = useState(false);
  //Burger nav state
  const [burgerPressed, setBurgerPressed] = useState(false);
  //History of router
  const history = useHistory();

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
        <TransitionGroup className="transition">
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={400}
            unmountOnExit
          >
            <Switch location={location}>
              <Route exact path="/">
                <Home onChangePage={handleChange} />
              </Route>
              <Route exact path="/works">
                <Works onChangePage={handleChange} />
              </Route>
              <Route exact path="/about">
                <About onChangePage={handleChange} />
              </Route>
              <Route exact path="/hire">
                <HireMe onChangePage={handleChange} />
              </Route>
              <Route path="/*">
                <Error onChangePage={handleChange} />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
});

export default App;
