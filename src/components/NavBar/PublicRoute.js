import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { getIsLoggedIn } from 'redux/selectors';

export default function PublicRoute({ children, ...restProps }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route {...restProps}>
      {isLoggedIn ? <Redirect to="/contacts" /> : children}
    </Route>
  );
}
