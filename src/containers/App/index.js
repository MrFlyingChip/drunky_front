import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as AdminActions from '../../actions/AdminActions';
import * as UserActions from '../../actions/UserActions';
import Header from "../../components/Header";
import './styles.css';
import Footer from "../../components/Footer";

class App extends Component {
    componentDidMount(){
        this.props.actions.checkCookies();
    }

  render() {
    return (
      <div className="App">
          <Header/>
          <main>
              {this.props.children}
          </main>
          <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        admin: state.admin,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...AdminActions, ...UserActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
