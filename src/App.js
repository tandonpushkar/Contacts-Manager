import React from "react";
import Header1 from "./Components/layout/Header1";
import Contacts from "./Components/contacts/Contacts";
import AddContact from "./Components/contacts/AddContact";
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
          <AddContact />
          <Contacts HandleSearch={this.state.search} />
        </div>
      </Provider>
    );
  }
}
