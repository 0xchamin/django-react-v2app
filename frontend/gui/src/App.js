import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import BaseRouter from './routes';
import 'antd/dist/antd.css';
import * as actions from './store/actions/auth';

import CustomLayout from './containers/Layout';

class App extends Component {

  componentDidMount(){

  }
  render() {
    return (
      <div>
        <Router>
          <CustomLayout {...this.props}>
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

//1.
const mapStateToProps = state => {
  return {
    //what we want to map to property
    //propertyp pass to connect
    isAuthenticated: state.token !== null
  }
}

//2. autmatic authentication check , everythin app render, it check if app is isAuthenticated
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
