import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import store from "../store";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Alerts from "./alerts/Alerts";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SideDrawer from "./sideDrawer/SideDrawer";
import Backdrop from "./backdrop/Backdrop";
import Home from "./home/Home";
import Warriors from "./roster/Warriors";
import Lakers from "./roster/Lakers";
import Rockets from "./roster/Rockets";
import Nets from "./roster/Nets";
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
    subMenuOpen: false
  };

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
    this.setState(prevState => {
      return { subMenuOpen: !prevState.subMenuOpen };
    });
  };

  subMenuCloseHandler = () => {
    this.setState({
      subMenuOpen: false
    });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = (
        <Backdrop
          sideDrawerCloseHandler={this.sideDrawerCloseHandler}
          subMenuCloseHandler={this.subMenuCloseHandler}
        />
      );
    }

    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Header sideDrawerOpenHandler={this.sideDrawerOpenHandler} />
            <Alerts />
            <SideDrawer
              sideDrawerOpen={this.state.sideDrawerOpen}
              sideDrawerCloseHandler={this.sideDrawerCloseHandler}
              subMenuOpenHandler={this.subMenuOpenHandler}
              subMenuOpen={this.state.subMenuOpen}
              subMenuCloseHandler={this.subMenuCloseHandler}
            />
            {backDrop}
            <Footer />
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/roster/warriors" component={Warriors} />
                <Route path="/roster/lakers" component={Lakers} />
                <Route path="/roster/rockets" component={Rockets} />
                <Route path="/roster/nets" component={Nets} />
                <Route path="/roster/clippers" component={Clippers} />
                <Route path="/roster/bucks" component={Bucks} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </Switch>
            </main>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
