import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import AuthNav from 'components/NavBar/AuthNav';
import Navigation from 'components/NavBar/MainNav';
import LogoutNav from './LogoutNav';
import './NavBar.scss';

export default function NavBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className="NavBar">
      <Navigation />
      {isLoggedIn ? <LogoutNav /> : <AuthNav />}
    </nav>
  );
}
