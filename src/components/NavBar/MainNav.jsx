import { NavLink } from 'react-router-dom';
import './MainNav.scss';

export default function Navigation() {
  return (
    <div>
      <NavLink
        exact
        to="/"
        className="nav-link"
        activeClassName="nav-link--active"
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        className="nav-link"
        activeClassName="nav-link--active"
      >
        Contacts
      </NavLink>
    </div>
  );
}
