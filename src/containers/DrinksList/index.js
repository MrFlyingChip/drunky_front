import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as AdminActions from '../../actions/AdminActions';
import {Link} from "react-router";

class DrinksList extends Component {
    componentDidMount(){
        this.props.actions.fetchAllProducts('drinks');
    }

    deleteDrinkItem = (id) => {

    };

    render() {
        const isLoaded = this.props.admin.isLoaded;
        const drinks = this.props.admin.products;

        const drinksList = drinks.map(item => {
            return(
                <div className={'admin-table-item'}>
                    <Link to={'/admin/drinks/' + item._id}>{item.name}</Link>
                </div>
            )
        });
        return (
            <div className="DrinksList">
                <Link to={'/admin'}>Back</Link>
                <p className={'header-text-18pt'}><Link to={'/admin/add-drink'}>Add Drink</Link></p>
                {(!isLoaded) ? <p>Not loaded yet</p>
                : drinksList}
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