import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as AdminActions from '../../actions/AdminActions';
import './styles.css';
import {Link} from 'react-router';

class AdminPage extends Component {
    render() {
        return (
            <div className="admin-page">
                <div className={'admin-table-item'}>
                    <Link to={'/admin/drinks'}>Drinks</Link>
                </div>
                <div className={'admin-table-item'}>
                    <Link to={'/admin/cocktails'}>Cocktails</Link>
                </div>
                <div className={'admin-table-item'}>
                    <Link to={'/admin/bars'}>Bars</Link>
                </div>
                <div className={'admin-table-item'}>
                    <Link to={'/admin/tools'}>Tools</Link>
                </div>
                <div className={'admin-table-item'}>
                    <Link to={'/admin/ingredients'}>Ingredients</Link>
                </div>
                <div className={'admin-table-item'}>
                    <Link to={'/admin/drinks'}>FilterTypes</Link>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)