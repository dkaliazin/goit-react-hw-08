import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import SearchBox from '../SearchBox/SearchBox';
export default function AppBar() {
    const location = useLocation();
    const isLoggedIn = useSelector(selectIsLoggedIn);
return (
    <header>
      <Navigation />
      {location.pathname === '/contacts' && <SearchBox />}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};