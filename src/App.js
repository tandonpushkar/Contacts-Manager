import React from "react";
import Header1 from "./Components/Header1";
import Contacts from "./Components/Contacts";
import Provider from "./context";
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
        <div>
          <Header1 changeHandler={this.HandleChange} />
          <Contacts HandleSearch={this.state.search} />
        </div>
      </Provider>
    );
  }
}
