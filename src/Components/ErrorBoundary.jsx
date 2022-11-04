import React, { Component } from "react";

class ErrorHandling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  //The static method(Gsd) is used  to render a fallback UI after an error is thrown
  static getDerivedStateFromError(nextProps, prevState) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Fetching Error!! wait a Sec..</h1>;
    }
    return this.props.children;
  }
}

export default ErrorHandling;
