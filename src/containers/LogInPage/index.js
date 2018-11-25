import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as UserActions from "../../actions/UserActions";
import {browserHistory} from 'react-router';

class LogInPage extends Component {
    componentDidMount(){
        if(this.props.user.isAuth){
            browserHistory.push('/');
        }
    }

    onSignUp = (event) => {
        event.preventDefault();
        const user = {
            username: event.target.username.value,
            password: event.target.password.value,
            email: event.target.email.value
        };
        this.props.actions.signUp(user);
    };

    onLogIn = (event) => {
        event.preventDefault();
        const user = {
            username: event.target.username.value,
            password: event.target.password.value,
        };
        this.props.actions.logIn(user);
    };

    render() {
        return (
            <div>
                <p className="header-text-24pt">Log In Page</p>
                <section className="container">
                    <div className="column column-center">
                        <p className="text-normal text-center">Connect to people who like alcohol drinks! Search for the
                            favourite coctailes and bars, pick up your friends and hang out with them!</p>
                        <p className="header-text-18pt text-center">Let`s party the world!</p>
                    </div>

                    <div className="column">
                        <form method="post" onSubmit={this.onSignUp}>
                            <p className="form-header">Sign up if you don`t have an account</p>
                            <input type="email" name="email" autoComplete="on" placeholder="Email" required
                                   className="input-field-form" />
                            <input type="text" name="username" autoComplete="on" placeholder="Username" required
                                       className="input-field-form" />
                            <input type="password" name="password" autoComplete="on" placeholder="Password"
                                           required className="input-field-form" />
                            <input type="submit" className="button-form" value="Sign Up" />
                        </form>
                        <form method="post" onSubmit={this.onLogIn}>
                            <p className="form-header">Have an account? Log in</p>
                            <input type="text" name="username" autoComplete="on" placeholder="Username" required
                                   className="input-field-form" />
                            <input type="password" name="password" autoComplete="on" placeholder="Password" required
                                       className="input-field-form" />
                            <input type="submit" className="button-form" value="Log In"/>
                        </form>
                    </div>
                </section>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage)