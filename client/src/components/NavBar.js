import React from 'react';
import { Link } from 'react-router-dom';
import { UilEstate, UilInfoCircle, UilShoppingBag, UilMessage, UilTimes, UilApps } from '@iconscout/react-unicons'

const NavBar = () => {
    return (
        <nav className='nav container'>
            <Link to='/' className='nav__logo'>StoreApp</Link>
            <div className='nav__menu' id='nav-menu'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <Link to='/' className='nav__link'>
                            <UilEstate/> 
                            <div>Главная</div>
                        </Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='/products' className='nav__link'>
                            <UilShoppingBag/>
                            <div>Каталог</div>
                        </Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='/about' className='nav__link'>
                            <UilInfoCircle/>
                            <div>О магазине</div>
                        </Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='/contact' className='nav__link'>
                            <UilMessage/>
                            <div>Контакты</div>
                        </Link>
                    </li>
                </ul>
                <div id='nav-close'><UilTimes/></div>
            </div>
            <div id='nav-toggle'>
                <UilApps/>
            </div>
        </nav>
    );
};

export default NavBar;