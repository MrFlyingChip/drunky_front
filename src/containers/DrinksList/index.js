import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as AdminActions from '../../actions/AdminActions';

class DrinksList extends Component {
    componentDidMount(){
        this.props.actions.fetchAllProducts('drinks');
    }

    render() {
        const isLoaded = this.props.admin.isLoaded;
        const drinks = this.props.admin.products;

        return (
            <div className="DrinksList">
                {(!isLoaded) ? <p>Not loaded yet</p>
                : drinks.map(item => <p>{item.name}</p>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(DrinksList)