import React from "react";
import { withStyles } from "@material-ui/core/styles";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Consumer } from "../../context";
import uuid from "uuid";

const Styles = theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  },
  margin: {
    margin: theme.spacing(1)
  }
});

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormClick = dispatch => {
    const { name, email, phone } = this.state;

    const NewContacts = {
      id: uuid(),
      name,
      email,
      phone
    };
    dispatch({ type: "ADD_CONTACT", payload: NewContacts });
  };

  render() {
    const { name, email, phone } = this.state;
    const { classes } = this.props;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <Paper className={classes.root}>
              <Box p={5} m={5}>
                <h1>Add Contact</h1>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <AccountCircle />
                    </Grid>
                    <Grid item>
                      <TextField
                        name="name"
                        value={name}
                        id="input-with-icon-grid"
                        label="Name"
                        onChange={this.handleChange}
                      />
                    </Grid>
                  </Grid>
                </div>

                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <EmailIcon />
                    </Grid>
                    <Grid item>
                      <TextField
                        name="email"
                        value={email}
                        id="input-with-icon-grid"
                        label="Email"
                        onChange={this.handleChange}
                      />
                    </Grid>
                  </Grid>
                </div>

                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <PhoneIcon />
                    </Grid>
                    <Grid item>
                      <TextField
                        name="phone"
                        value={phone}
                        id="input-with-icon-grid"
                        label="Phone"
                        onChange={this.handleChange}
                      />
                    </Grid>
                  </Grid>
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleFormClick.bind(this, dispatch)}
                >
                  Add Contact
                  <Icon className={classes.rightIcon}>send</Icon>
                </Button>
              </Box>
            </Paper>
          );
        }}
      </Consumer>
    );
  }
}

AddContact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(AddContact);
