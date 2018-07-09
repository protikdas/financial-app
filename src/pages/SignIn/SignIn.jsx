import React, { Component } from "react";
import "./SignIn.less";

export default class SignIn extends Component {
  render() {
    const { signin } = this.props;

    return (
      <div className="sign-in-container">
        <h1 onClick={signin}>Sign In</h1>
      </div>
    );
  }
}
