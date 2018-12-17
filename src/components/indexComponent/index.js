import React from "react";

import { Container } from "semantic-ui-react/dist/commonjs";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import Search from "./searchComponent/search";

export default class Animation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
        <Footer />
      </React.Fragment>
    );
  }
}
