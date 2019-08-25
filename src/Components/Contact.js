import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";

const Styles = {
  card: {
    maxWidth: 500
  },
  media: {
    height: 100
  }
};

class Contact extends React.Component {
  handleClick = () => {
    this.props.deleteClickHandler();
  };

  render() {
    return (
      <Box p={1} bgcolor="background.paper">
        <Card className={this.props.classes.card}>
          <CardActionArea>
            <CardMedia
              className={this.props.classes.media}
              image="https://api.adorable.io/avatars/206/abott@adorable.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <EmailIcon /> {this.props.email}
                <br />
                <PhoneAndroidOutlinedIcon /> {this.props.phone}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button onClick={this.handleClick} size="small" color="secondary">
              Delete
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(Contact);
