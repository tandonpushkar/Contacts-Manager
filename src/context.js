import React from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    default:
      return state;
  }
};

export default class Provider extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Pushkar Tandon",
        email: "tandonpushkar@gmail.com",
        phone: "96768768"
      },
      {
        id: 2,
        name: "Salman Khan",
        email: "khansalman@gmail.com",
        phone: "96676876"
      },
      {
        id: 3,
        name: "Katrina Kaif",
        email: "kaifkatrina@gmail.com",
        phone: "9676686868"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
