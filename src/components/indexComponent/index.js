import React from "react";

import { Container } from "semantic-ui-react/dist/commonjs";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import "./static/css/index.css";

export default class Animation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Footer />
      </React.Fragment>
    );
  }
}
