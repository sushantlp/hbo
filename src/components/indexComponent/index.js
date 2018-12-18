import React from "react";

import { Container } from "semantic-ui-react/dist/commonjs";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import Search from "./searchComponent/search";
import Specialization from "./specializationComponent/specialization";
import Hospital from "./hospitalComponent/hospital";

export default class Animation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
        <Specialization />
        <Hospital />
        <Footer />
      </React.Fragment>
    );
  }
}
