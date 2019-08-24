import React from "react";
import Contact from "./Contact";
export default class Contacts extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Pushkar",
        email: "tandonpushkar@gmail.com",
        phone: "96768768"
      },
      {
        id: 2,
        name: "Harddik",
        email: "kakdbab@gmail.com",
        phone: "96676876"
      },
      {
        id: 3,
        name: "Kartik",
        email: "ahhaijljall@gmail.com",
        phone: "9676686868"
      }
    ]
  };

  deleteContact = id => {
    const newContacts = this.state.contacts.filter(c => c.id !== id);
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <div>
        {this.state.contacts.map(c => (
          <Contact
            name={c.name}
            email={c.email}
            phone={c.phone}
            deleteClickHandler={this.deleteContact.bind(this, c.id)}
          />
        ))}
      </div>
    );
  }
}
