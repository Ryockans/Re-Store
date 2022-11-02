import React, {Component} from "react";
import ErrorIndicator from "../error-indicator";

interface ErrorBoundaryProps {
  children: React.ReactNode
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps> {

  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return (<ErrorIndicator/>)
    }

    return this.props.children;
  }
}