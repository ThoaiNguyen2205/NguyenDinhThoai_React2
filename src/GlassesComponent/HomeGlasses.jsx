import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";

export default class HomeGlasses extends Component {
  render() {
    return (
      <div
        className="bg-home"
        style={{
          backgroundImage: "url(./glassesImage/background1.jpeg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "800px",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0, 0.5)", minHeight: "1000px" }}
        >
          <Header />
          <Body />
        </div>
      </div>
    );
  }
}
