import React, { Component } from "react";
import "./Dashboard.less";

export default class Dashboard extends Component {
  render() {
    const { signout } = this.props;
    return (
      <div className="dashboard-container">
        <h1 onClick={signout}>Dashboard</h1>
      </div>
    );
  }
}
