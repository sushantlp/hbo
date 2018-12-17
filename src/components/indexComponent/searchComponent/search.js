import React from "react";

import {
  Dropdown,
  Grid,
  Icon,
  Segment,
  Container
} from "semantic-ui-react/dist/commonjs";

import "semantic-ui-css/semantic.min.css";
import "./static/css/search.css";

export default class Search extends React.Component {
  render() {
    return (
      <div
        fluid
        style={{
          width: "auto",
          height: "500px",
          backgroundImage:
            "url('https://res.cloudinary.com/dp67gawk6/image/upload/v1545048011/ballyhoo/BALLYHOO_WEBSITE/practo.svg')",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          overflow: "hidden"
        }}
      >
        <Grid divided="vertically" style={{ marginTop: "15vh" }}>
          <Grid.Column>
            <h1 className="background-heading">Your home for health</h1>
          </Grid.Column>
        </Grid>

        <Container>
          <Grid columns="equal">
            <Grid.Row>
              <Grid.Column>
                <Dropdown
                  placeholder="City"
                  search
                  fluid
                  selection
                  icon={
                    <Icon
                      name="map marker alternate"
                      style={{
                        marginRight: "-2vh",
                        float: "right",
                        color: "grey"
                      }}
                    />
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  placeholder="Locality"
                  fluid
                  search
                  selection
                  icon={
                    <Icon
                      name="map marker alternate"
                      style={{
                        marginRight: "-2vh",
                        float: "right",
                        color: "grey"
                      }}
                    />
                  }
                />
              </Grid.Column>

              <Grid.Column>
                <Dropdown
                  placeholder="Search"
                  fluid
                  search
                  selection
                  icon={
                    <Icon
                      name="search"
                      style={{
                        marginTop: "-2vh",
                        float: "right",
                        color: "grey"
                      }}
                    />
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}