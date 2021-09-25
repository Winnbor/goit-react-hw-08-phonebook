import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className="Navigation">
      <div className="Navigation__divider">
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
      <div className="Navigation__divider">
        <NavLink
          to="/users/login"
          className="nav-link"
          activeClassName="nav-link--active"
        >
          LogIn
        </NavLink>
        <NavLink
          to="/users/signup"
          className="nav-link"
          activeClassName="nav-link--active"
        >
          Register
        </NavLink>
      </div>
    </nav>
  );
}
