import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css'
export default function UserMenu() {      
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    return (
        <>
            <p className={css.username}>Hello, {user.name}!</p>
            <button type='button' onClick={() => dispatch(logOut())}>Log Out</button>
        </>
    )
}