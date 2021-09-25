import AuthNav from 'components/NavBar/AuthNav';
import Navigation from 'components/NavBar/MainNav';
import LogoutNav from './LogoutNav';
import './NavBar.scss';

export default function NavBar() {
  return (
    <nav className="NavBar">
      <Navigation />
      <AuthNav />
      <LogoutNav />
    </nav>
  );
}
