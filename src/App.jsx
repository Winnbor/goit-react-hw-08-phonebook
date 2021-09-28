import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as contactsOperations from 'redux/operations';
import { getIsFetchingUser } from 'redux/selectors';

import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import PrivateRoute from 'components/NavBar/PrivateRoute';
import PublicRoute from 'components/NavBar/PublicRoute';

const HomePageView = lazy(() => import('views/HomePageView'));
const ContactsView = lazy(() => import('views/ContactsView'));
const LoginView = lazy(() => import('views/LoginView'));
const SignupView = lazy(() => import('views/SignupView'));
const NotFoundView = lazy(() => import('views/NotFoundView'));

function App() {
  const isFetchingUser = useSelector(getIsFetchingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {!isFetchingUser && (
        <>
          <Header />
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route exact path="/">
                <HomePageView />
              </Route>
              <PrivateRoute path="/contacts">
                <ContactsView />
              </PrivateRoute>
              <PublicRoute path="/users/login">
                <LoginView />
              </PublicRoute>
              <PublicRoute path="/users/signup">
                <SignupView />
              </PublicRoute>
              <Route>
                <NotFoundView />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
