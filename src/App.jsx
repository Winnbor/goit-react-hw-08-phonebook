import { lazy, Suspense } from 'react';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import { Route, Switch } from 'react-router-dom';

const HomePageView = lazy(() => import('views/HomePageView'));
const ContactsView = lazy(() => import('views/ContactsView'));
const LoginView = lazy(() => import('views/LoginView'));
const SignupView = lazy(() => import('views/SignupView'));
const NotFoundView = lazy(() => import('views/NotFoundView'));

function App() {
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
