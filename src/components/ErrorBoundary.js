import React from 'react';


class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hasError: false,
    }
  }

  //kind of like the try catch block
  //if anything errors out then it will run this lifecycle hook
  componentDidCatch(){
    this.setState({ hasError: true });
  }

  render(){
    if(this.state.hasError){
      return <h1>Oops. An error has occured</h1>;
    }
    else{
      return this.props.children;
    }
  }
}

export default ErrorBoundary;