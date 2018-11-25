import React, { Component } from 'react';
import {Link} from 'react-router';
import './styles.css';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-menu">
                    <nav className="vertical-nav">
                        <ul>
                            <li><Link to="/" className="nav-link logo">Drunky</Link></li>
                            <li><Link to="/choose_drinks" className="nav-link">Drinks</Link></li>
                            <li><Link to="/choose_cocktails" className="nav-link">Cocktails</Link></li>
                            <li><Link to="/bars" className="nav-link">Bars</Link></li>
                            <li><Link to="/about" className="nav-link">About</Link></li>
                        </ul>
                    </nav>
                    <div className="social-links">
                        <p>Get our app</p>
                        <Link to="https://www.apple.com/ios/app-store/">
                            <img src="https://png.icons8.com/material/50/000000/apple-app-store.png" alt={'ios'}/>
                        </Link>
                        <Link href="https://play.google.com/">
                            <img src="https://png.icons8.com/material/50/000000/google-play.png" alt={'android'}/>
                        </Link>
                    </div>
                    <div className="creator">
                        <p>Created by</p>
                        <Link to="" className="nav-link underlined-link">MrFlyingChip Studios</Link>
                    </div>
                </div>
            </footer>
        );
    }
}