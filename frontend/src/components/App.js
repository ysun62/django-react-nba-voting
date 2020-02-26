import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import store from "../store";
import { loadUser } from "../actions/auth";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Alerts from "./alerts/Alerts";
import Header from "./header/Header";
import Trivia from "./trivia/Trivia";
import Footer from "./footer/Footer";
import SideDrawer from "./sideDrawer/SideDrawer";
import Backdrop from "./backdrop/Backdrop";
import Home from "./home/Home";
import Raptors from "./roster/Raptors";
import Lakers from "./roster/Lakers";
import Rockets from "./roster/Rockets";
import Celtics from "./roster/Celtics";
import Clippers from "./roster/Clippers";
import Bucks from "./roster/Bucks";
import Login from "./user/Login";
import Register from "./user/Register";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
  containerStyle: {
    zIndex: 300
  }
};

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
    subMenuOpen: false,
    modalOpen: false
  };

  componentDidMount() {
    store.dispatch(loadUser());
  }

  sideDrawerOpenHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  sideDrawerCloseHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };

  subMenuOpenHandler = () => {
    this.setState(
      prevState => {
        return { subMenuOpen: !prevState.subMenuOpen };
      },
      () => {
        document.addEventListener("click", this.subMenuCloseHandler);
      }
    );
  };

  subMenuCloseHandler = () => {
    this.setState(
      {
        subMenuOpen: false
      },
      () => {
        document.removeEventListener("click", this.subMenuCloseHandler);
      }
    );
  };

  modalOpenHandler = () => {
    this.setState(prevState => {
      return { modalOpen: !prevState.modalOpen };
    });
  };
  modalCloseHandler = () => {
    this.setState({
      modalOpen: false
    });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen || this.state.modalOpen) {
      backDrop = (
        <Backdrop
          sideDrawerCloseHandler={this.sideDrawerCloseHandler}
          subMenuCloseHandler={this.subMenuCloseHandler}
          modalCloseHandler={this.modalCloseHandler}
        />
      );
    }

    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Header
              sideDrawerOpenHandler={this.sideDrawerOpenHandler}
              subMenuOpenHandler={this.subMenuOpenHandler}
              subMenuOpen={this.state.subMenuOpen}
              subMenuCloseHandler={this.subMenuCloseHandler}
            />
            <Alerts />
            {this.state.modalOpen && (
              <Trivia modalCloseHandler={this.modalCloseHandler} />
            )}
            <SideDrawer
              sideDrawerOpen={this.state.sideDrawerOpen}
              sideDrawerCloseHandler={this.sideDrawerCloseHandler}
              subMenuOpenHandler={this.subMenuOpenHandler}
              subMenuOpen={this.state.subMenuOpen}
              subMenuCloseHandler={this.subMenuCloseHandler}
            />
            {backDrop}
            <Footer
              modalOpenHandler={this.modalOpenHandler}
              subMenuCloseHandler={this.subMenuCloseHandler}
            />
            <main>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => (
                    <Home subMenuCloseHandler={this.subMenuCloseHandler} />
                  )}
                />
                <Route
                  path="/roster/lakers"
                  component={() => (
                    <Lakers subMenuCloseHandler={this.subMenuCloseHandler} />
                  )}
                />
                <Route
                  path="/roster/celtics"
                  component={() => (
                    <Celtics subMenuCloseHandler={this.subMenuCloseHandler} />
                  )}
                />
                <Route
                  path="/roster/rockets"
                  component={() => (
                    <Rockets subMenuCloseHandler={this.subMenuCloseHandler} />
                  )}
                />
                <Route
                  path="/roster/raptors"
                  component={() => (
                    <Raptors subMenuCloseHandler={this.subMenuCloseHandler} />
                  )}
                />
                <Route
                  path="/roster/clippers"
                  component={() => (
                    <Clippers subMenuCloseHandler={this.subMenuCloseHandler} />
                  )}
                />
                <Route
                  path="/roster/bucks"
                  component={() => (
                    <Bucks subMenuCloseHandler={this.subMenuCloseHandler} />
                  )}
                />
                <Route
                  path="/login"
                  component={() => (
                    <Login subMenuCloseHandler={this.subMenuCloseHandler} />
                  )}
                />
                <Route
                  path="/register"
                  component={() => (
                    <Register subMenuCloseHandler={this.subMenuCloseHandler} />
                  )}
                />
              </Switch>
            </main>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
