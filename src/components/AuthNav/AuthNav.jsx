import { NavLink } from 'react-router-dom'
import css from "./AuthNav.module.css"
export default function AuthNav() {
    return (
        <div className={css.container}>
            <NavLink to='/register'>Sign in</NavLink>
            <NavLink to='/login'>Log in</NavLink>
        </div>
    )
}