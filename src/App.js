import React from 'react';
import Login from './screens/Login';

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
      /* We need to replace this with react-navigation stuff */
      <Login/>
    );
  }
}
