import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className="item">HomeLink</Link>
            <div className="right menu">
                <Link to="/" className="item">All Lists</Link>
                <button className="ui red google button">
                    <i className="google icon" />
                    Sign in With Google
                </button>
            </div>
        </div>
    )
}

export default Header;
