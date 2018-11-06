import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import BaseRouter from './routes';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <CustomLayout>
              <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

//connect app to state
//using connect method form redux
//connect method help to access
//grab store that we created allow to access some state from store
//  export default App;

//connect takes 2 parameters
// 1. map state to props  - convert state from react redux into properties taht we can use in our app
/// 2. map dispatch to props

export default connect()(App);
