import React from 'react';
import '../../App.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="link" style={{ position: 'absolute', margin: 'auto', left: '13%', right:'13%' }}>
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">
                                <img src="https://bumper-stickers.ru/7432-thickbox_default/ikonka-glavnoy-stranicy.jpg"
                                    width="17"
                                    height="17"
                                    className="d-inline-block align-top"
                                    alt=""
                                />
                                &ensp;Главная
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Print" className="nav-link">Печать</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/About" className="nav-link">О приложении</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;