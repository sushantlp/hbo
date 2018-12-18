import React from "react";

import { Card, Container, Button } from "semantic-ui-react/dist/commonjs";

import "../../../static/css/root.css";
import "./static/css/hospital.css";

export default class Hospital extends React.Component {
  render() {
    return (
      <Container className="hospital-container">
        <div className="header-container">
          <h4 className="header-name">HOSPITAL</h4>
          <div className="underscore" />
        </div>

        <Card.Group itemsPerRow={4} doubling stackable>
          <Card className="discover-card" raised>
            <div className="ui fluid image">
              <img
                src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545124570/ballyhoo/BALLYHOO_WEBSITE/hospital1.jpg"
                alt=""
              />
              <span className="discover-header">Hospital1</span>
            </div>
          </Card>

          <Card className="discover-card" raised>
            <div className="ui fluid image">
              <img
                src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545124570/ballyhoo/BALLYHOO_WEBSITE/hospital3.jpg"
                alt=""
              />
              <span className="discover-header">Hospital2</span>
            </div>
          </Card>

          <Card className="discover-card" raised>
            <div className="ui fluid image">
              <img
                src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545124571/ballyhoo/BALLYHOO_WEBSITE/hospital4.jpg"
                alt=""
              />
              <span className="discover-header">Hospital3</span>
            </div>
          </Card>

          <Card className="discover-card" raised>
            <div className="ui fluid image">
              <img
                src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545124571/ballyhoo/BALLYHOO_WEBSITE/hospital8.jpg"
                alt=""
              />
              <span className="discover-header">Hospital4</span>
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
