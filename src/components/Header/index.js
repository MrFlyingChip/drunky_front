import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from 'react-router';
import './styles.css';
import {ADMIN_ROLE} from "../../constants/Drunky";
import * as UserActions from "../../actions/UserActions";

class Header extends Component {
    onLogOut = () => {
        this.props.actions.logOut();
    };

    render() {
        const isAuth = this.props.user.isAuth;
        const role = this.props.user.role;

        return (
            <header>
                <nav className="menu">
                    <ul className="nav-container">
                        <li><Link to="/" className="nav-button logo">Drunky</Link></li>
                        <li><Link to="/choose_drinks/" className="nav-button">Drinks</Link></li>
                        <li><Link to="/choose_cocktails" className="nav-button">Cocktails</Link></li>
                        <li><Link to="/choose_bars" className="nav-button">Bars</Link></li>
                        <li><Link to="/about" className="nav-button">About</Link></li>
                    </ul>
                        {(isAuth)
                            ?
                            <ul className="nav-container-aside-right">
                                {(role === ADMIN_ROLE)
                                    ?
                                    <li><Link to="/admin" className="nav-button">Admin</Link></li>
                                    :
                                    <li><Link to="/account" className="nav-button">Account</Link></li>}
                                <li><Link to="/" className="nav-button" onClick={this.onLogOut}>Exit</Link></li>
                            </ul>
                            :
                            <ul className="nav-container-aside-right">
                                <img src={'/images/baseline_input_white_24dp.png'} alt={'login'}/>
                                <li><Link to="/login" className="nav-button">Log in</Link></li>
                            </ul>
                            }
                </nav>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...UserActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)