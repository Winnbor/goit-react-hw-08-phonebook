import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import AuthNav from 'components/NavBar/AuthNav';
import MainNav from 'components/NavBar/MainNav';
import LogoutNav from './LogoutNav';
import './NavBar.scss';

export default function NavBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className="NavBar">
      <MainNav />
      {isLoggedIn ? <LogoutNav /> : <AuthNav />}
    </nav>
  );
}
