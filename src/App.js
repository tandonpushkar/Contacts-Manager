import React from "react";
import Header1 from "./Components/layout/Header1";
import Contacts from "./Components/contacts/Contacts";
import AddContact1 from "./Components/contacts/AddContact1";
import Provider from "./context";
import About from "./Components/pages/About";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  state = {
    search: ""
  };

  HandleChange = e => {
    this.setState({
      search: e.target.value.trim()
    });
  };

  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header1 changeHandler={this.HandleChange} />
            <div>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Contacts {...props} HandleSearch={this.state.search} />
                  )}
                />
                <Route path="/addcontact" component={AddContact1} />
                <Route path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
