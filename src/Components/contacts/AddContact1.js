import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ContactsIcon from "@material-ui/icons/Contacts";
import { Consumer } from "../../context";
import uuid from "uuid";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © tandonpushkar "}

      {new Date().getFullYear()}
    </Typography>
  );
}

const Styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class AddContact1 extends React.Component {
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

  handleFormClick = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    const NewContacts = {
      id: uuid(),
      name,
      email,
      phone
    };
    dispatch({ type: "ADD_CONTACT", payload: NewContacts });

    //clear state
    this.setState({
      name: "",
      email: "",
      phone: ""
    });

    this.props.history.push("/");
  };
  render() {
    const { name, email, phone } = this.state;
    const { classes } = this.props;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <ContactsIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Add Contact
                </Typography>
                <form
                  id="myform"
                  onSubmit={this.handleFormClick.bind(this, dispatch)}
                  className={classes.form}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="fname"
                        name="name"
                        value={name}
                        variant="outlined"
                        required
                        fullWidth
                        label="Full Name"
                        autoFocus
                        onChange={this.handleChange}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="email"
                        value={email}
                        id="email"
                        label="Email Address"
                        autoComplete="email"
                        onChange={this.handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="phone"
                        value={phone}
                        variant="outlined"
                        required
                        fullWidth
                        onChange={this.handleChange}
                        label="Phone"
                        type="number"
                        id="phone"
                        autoComplete="phone"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    form="myform"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Add Contact
                  </Button>
                </form>
              </div>
              <Box mt={5}>
                <Copyright />
              </Box>
            </Container>
          );
        }}
      </Consumer>
    );
  }
}

AddContact1.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(AddContact1);
