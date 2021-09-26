import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { getIsLoggedIn } from 'redux/selectors';

export default function PrivateRoute({ children, ...restProps }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route {...restProps}>
      {isLoggedIn ? children : <Redirect to="/users/login" />}
    </Route>
  );
}
