import React from "react";
import Header1 from "./Components/Header1";
import Contacts from "./Components/Contacts";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header1 />
        <Contacts />
      </div>
    );
  }
}
