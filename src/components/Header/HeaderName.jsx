import React from 'react';
import Search from './Search/Search';
import '../../App.scss';
import { NavLink } from 'react-router-dom';

const HeaderName = () => (
    <nav className="navbar navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
        <NavLink className="navbar-brand app-pl-60" to='/'>
            <table>
                <tbody>
                    <tr>
                        <td rowSpan={2}>
                            <img src="https://ilim.generation-startup.ru/local/static/build/img/svg-lp/vtb/info-support/KNITU.png"
                                width="47"
                                height="50"
                                className="d-inline-block align-top"
                                alt=""
                            /></td>
                        <td className="app-pl-30">КАЗАНСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ</td>
                    </tr>
                    <tr>
                        <td className="app-pl-30">ТЕХНОЛОГИЧЕСКИЙ УНИВЕРСИТЕТ</td>
                    </tr>
                </tbody>
            </table>
        </NavLink>

        <Search />

    </nav>
);

export default HeaderName;