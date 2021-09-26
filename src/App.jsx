import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as contactsOperations from 'redux/operations';

import Container from 'components/Container/Container';
import Header from 'components/Header/Header';

const HomePageView = lazy(() => import('views/HomePageView'));
const ContactsView = lazy(() => import('views/ContactsView'));
const LoginView = lazy(() => import('views/LoginView'));
const SignupView = lazy(() => import('views/SignupView'));
const NotFoundView = lazy(() => import('views/NotFoundView'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/">
              <HomePageView />
            </Route>
            <Route path="/contacts">
              <ContactsView />
            </Route>
            <Route path="/users/login">
              <LoginView />
            </Route>
            <Route path="/users/signup">
              <SignupView />
            </Route>
            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
