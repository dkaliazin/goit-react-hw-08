import { NavLink } from 'react-router-dom';
import React from 'react';
import css from "./Navigation.module.css"
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux'
export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav className={css.nav}>
            <NavLink to="/" end >Home</NavLink>
            {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        </nav>
    )
}