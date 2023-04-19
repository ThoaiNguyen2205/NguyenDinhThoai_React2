import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";
import Item from "./Item";

export default class Body extends Component {
  state = {
    glassesCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderDataGlasses = () => {
    return dataGlasses.map((glasses, index) => {
      return (
        <div className="col-lg-2 col-md-3 col-sm-4 text-center" key={index}>
          <div className="glasses-item ">
            <button
              onClick={() => {
                this.changeGlasses(glasses);
              }}
            >
              <img src={glasses.url} alt="..." />
            </button>
          </div>
        </div>
      );
    });
  };
  changeGlasses = (newGlasses) => {
    this.setState({
      glassesCurrent: newGlasses,
    });
  };
  render() {
    return (
      <div className=" products ">
        <div className="product-model container d-flex justify-content-between">
          <div className="product-left">
            <div className="product-card">
              <Item />
              <div className="product-title">
                <h5>{this.state.glassesCurrent.name}</h5>
                <p>{this.state.glassesCurrent.desc}</p>
              </div>
              <div className="product-item">
                <img
                  src={this.state.glassesCurrent.url}
                  alt="..."
                  className="changeStyle"
                />
              </div>
            </div>
          </div>
          <div className="product-right">
            <div className="product-card">
              <Item />
            </div>
          </div>
        </div>
        <div className="product-select">
          <div className="container">
            <div className="row">{this.renderDataGlasses()}</div>
          </div>
        </div>
      </div>
    );
  }
}
