import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import  styles from '../navBar/nav.css'
import { useLanguage } from '../language/language'; 
const Navbar = () => {
    const { lang, toggleLanguage } = useLanguage(); 
    return (
        <nav class="navbar navbar-expand-lg navbar-rose bg-light">
            <div className="container">
                <Link className="btn btn-outline-success" to="/">Home</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="btn btn-outline-success"  to="/movies">Movies</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="btn btn-outline-success" activeclassname="active" to="/favorites">Fav Movies</NavLink>
                        </li>
                        <li className={styles.navItem}>
                            <button className="btn btn-outline-info  " onClick={toggleLanguage}>
                                {lang === 'en' ? '(English)' : ' (عربي)'}
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
