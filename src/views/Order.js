import React, { Component } from "react";
import OrderComponent from "../components/order/OrderComponent";

export default class order extends Component {
  render() {
    return (
      <div className="max-w-7xl pt-5 mx-auto px-2 sm:px-6 lg:px-8">
        <OrderComponent />
      </div>
    );
  }
}
