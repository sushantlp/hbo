import React from "react";

import { Card, Container, Button } from "semantic-ui-react/dist/commonjs";

import "../../../static/css/root.css";
import "./static/css/ambulance.css";

export default class Ambulance extends React.Component {
  render() {
    return (
      <Container className="ambulance-container">
        <div className="header-container">
          <h4 className="header-name">AMBULANCE</h4>
          <div className="underscore" />
        </div>

        <Card.Group itemsPerRow={4} doubling stackable>
          <Card className="ambulance-card" raised>
            <div className="ui fluid image">
              <img
                src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545131374/ballyhoo/BALLYHOO_WEBSITE/ambulance1.jpg"
                alt=""
              />
              <span className="ambulance-header">Ambulance1</span>
            </div>
          </Card>

          <Card className="ambulance-card" raised>
            <div className="ui fluid image">
              <img
                src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545131376/ballyhoo/BALLYHOO_WEBSITE/ambulance2.jpg"
                alt=""
              />
              <span className="ambulance-header">Ambulance2</span>
            </div>
          </Card>

          <Card className="ambulance-card" raised>
            <div className="ui fluid image">
              <img
                src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545131374/ballyhoo/BALLYHOO_WEBSITE/ambulance3.png"
                alt=""
              />
              <span className="ambulance-header">Ambulance3</span>
            </div>
          </Card>

          <Card className="ambulance-card" raised>
            <div className="ui fluid image">
              <img
                src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_600/v1545131374/ballyhoo/BALLYHOO_WEBSITE/ambulance4.jpg"
                alt=""
              />
              <span className="ambulance-header">Ambulance4</span>
            </div>
          </Card>
        </Card.Group>

        <Button
          size="large"
          basic
          color="black"
          style={{
            marginTop: "2em",
            marginBottom: "2em",
            marginLeft: "45%"
          }}
        >
          View More
        </Button>
      </Container>
    );
  }
}
