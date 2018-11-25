import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as AdminActions from '../../actions/AdminActions';
import DrinksList from "../DrinksList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DrinksList/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        admin: state.admin
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...AdminActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
