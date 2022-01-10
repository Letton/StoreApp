import { React, useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {

    const {menuState, setMenuState} = props

    const mobileMenuHandler = (state) => {
        setMenuState(state === 'active'? '' : 'active')
    }


    return (
        <nav>
            <div className="nav-container">
                <div className="nav-logo">
                    <Link to='/'>StoreApp</Link>
                </div>
                <div className="nav-block">
                    <ul className={`nav-menu ${menuState}`}>
                        <li className="nav-item">
                            <Link to='/products'>Товары</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/shop'>О магазине</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/shop'>Связаться</Link>
                        </li>
                    </ul>
                    <div className="nav-basket">
                        <Link to='/shop'>
                            <i className="uil uil-shopping-bag"/>
                        </Link>
                    </div>
                    <div id="nav-toggle" onClick={() => mobileMenuHandler(menuState)}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;