import React from "react";
import Contact from "./Contact";
import Box from "@material-ui/core/Box";
import { Consumer } from "../../context";

export default class Contacts extends React.Component {
  // deleteContact = id => {
  //   const newContacts = this.state.contacts.filter(c => c.id !== id);
  //   this.setState({
  //     contacts: newContacts
  //   });
  // };

  render() {
    return (
      <Consumer>
        {value => {
          //Search
          let FilteredContact = value.contacts.filter(c => {
            return (
              c.name
                .toLowerCase()
                .indexOf(this.props.HandleSearch.toLowerCase()) !== -1
            );
          });
          //Search

          return (
            <Box
              display="flex"
              flexWrap="wrap"
              p={3}
              m={3}
              bgcolor="background.paper"
            >
              {FilteredContact.map(c => (
                <div key={c.id}>
                  <Contact
                    id={c.id}
                    name={c.name}
                    email={c.email}
                    phone={c.phone}
                    // deleteClickHandler={this.deleteContact.bind(this, c.id)}
                  />
                </div>
              ))}
            </Box>
          );
        }}
      </Consumer>
    );
  }
}
