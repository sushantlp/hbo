import React from "react";
import { Link } from "react-router-dom";

import { Menu } from "semantic-ui-react/dist/commonjs";
import Sticky from "react-stickynode";

import "semantic-ui-css/semantic.min.css";
import "./static/css/header.css";
import "../../static/css/root.css";

export default class Header extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", function() {
      document.getElementById("showScroll").innerHTML = pageYOffset + "px";
    });
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementsByClassName("navbar-container");
    if (
      wrappedElement.scrollHeight - wrappedElement.scrollTop ===
      wrappedElement.clientHeight
    ) {
      console.log("header bottom reached");
      document.removeEventListener("scroll", this.trackScrolling);
    } else {
      console.log(wrappedElement);
    }
  };
  render() {
    return (
      <Sticky
        enabled={true}
        top={0}
        bottomBoundary={".footer-container"}
        innerZ={1}
        onStateChange={this.call}
      >
        <div className="navbar-container">
          <form action="javascript:void(0)" autoComplete={"off"}>
            <Menu
              style={{
                backgroundColor: "white"
              }}
            >
              <Link to={"/"}>
                <Menu.Item>
                  <h1
                    style={{
                      color: "#ed3237"
                    }}
                  >
                    HK
                  </h1>
                </Menu.Item>
              </Link>
            </Menu>
          </form>
        </div>
      </Sticky>
    );
  }
}
