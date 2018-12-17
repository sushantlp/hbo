import React from "react";
import { Link } from "react-router-dom";

import { Menu } from "semantic-ui-react/dist/commonjs";

import "./static/css/header.css";
import "semantic-ui-css/semantic.min.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <form action="javascript:void(0)" autoComplete={"off"}>
          <Menu
            style={{
              backgroundColor: "#263868"
            }}
          >
            <Link to={"/"}>
              <Menu.Item>
                <h2
                  style={{
                    color: "#ed3237"
                  }}
                >
                  HospitalKonnect
                </h2>
              </Menu.Item>
            </Link>
          </Menu>
        </form>
      </div>
    );
  }
}
