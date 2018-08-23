import React from 'react';
import Navigator from './Navigator';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };
  }

  componentDidMount() {
    /* fire base things? It's already set up and configured
    but other fire base things (y) */
  }

  render() {
    return (
      <Navigator />
    );
  }
}



