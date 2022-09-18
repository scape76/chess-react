import React from 'react';
import './App.css';
import {Link, Outlet} from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <nav className="navigation">
                <Link className="navigation__selection" to={'/chess'}>
                    Chess
                </Link>
                <Link className="navigation__selection" to={'/checkers'}>
                    Checkers
                </Link>
            </nav>
            <Outlet/>
        </div>
    )
}

export default App;
