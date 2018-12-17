import React from "react";

import { Container } from "semantic-ui-react/dist/commonjs";
import { Animated } from "react-animated-css";

import "./static/css/animation.css";

export default class Animation extends React.Component {
  render() {
    return (
      <Container style={{ overflow: "hidden" }}>
        <Animated
          animationIn="slideInLeft"
          animationOut="pulse"
          isVisible={true}
        >
          <div className="square1">
            <span className="Span">Hover</span>
          </div>
        </Animated>

        <Animated animationIn="zoomIn" animationOut="pulse" isVisible={true}>
          <div className="circle" />
        </Animated>

        <Animated
          animationIn="slideInLeft"
          animationOut="pulse"
          isVisible={true}
        >
          <div className="square2">
            <span className="Span">Hover</span>
          </div>
        </Animated>

        <Animated
          animationIn="slideInLeft"
          animationOut="pulse"
          isVisible={true}
        >
          <div className="square3">
            <span className="Span">Hover</span>
          </div>
        </Animated>
        <Animated
          animationIn="slideInRight"
          animationOut="pulse"
          isVisible={true}
        >
          <div className="square4">
            <span className="Span">Right-Hover</span>
          </div>
        </Animated>
        <Animated
          animationIn="slideInRight"
          animationOut="pulse"
          isVisible={true}
        >
          <div className="square5">
            <span className="Span">Right-Hover</span>
          </div>
        </Animated>
        <Animated
          animationIn="slideInRight"
          animationOut="pulse"
          isVisible={true}
        >
          <div className="square6">
            <span className="Span">Right-Hover</span>
          </div>
        </Animated>
      </Container>
    );
  }
}
