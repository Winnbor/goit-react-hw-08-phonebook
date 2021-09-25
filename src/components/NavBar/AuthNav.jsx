import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/users/login"
        className="nav-link"
        activeClassName="nav-link--active"
      >
        Log In
      </NavLink>
      <NavLink
        to="/users/signup"
        className="nav-link"
        activeClassName="nav-link--active"
      >
        Sign Up
      </NavLink>
    </div>
  );
}
