import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from 'redux/selectors';
import { getLoggedOut } from 'redux/operations';
import './LogoutNav.scss';

export default function LogoutNav() {
  const user = useSelector(getUserName);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(getLoggedOut());
  };

  return (
    <div className="LogoutNav">
      <span className="LogoutNav__greeting">Hello, {user ?? 'User'}</span>
      <button className="LogoutNav__btn" type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
