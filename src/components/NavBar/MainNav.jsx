import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import './MainNav.scss';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

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

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className="nav-link"
          activeClassName="nav-link--active"
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
}
