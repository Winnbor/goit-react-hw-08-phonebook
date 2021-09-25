// import { lazy, Suspense } from 'react';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import { Route, Switch } from 'react-router-dom';

import MainPageView from 'views/HomePageView';
import ContactsView from 'views/ContactsView';
import LoginView from 'views/LoginView';
import SignupView from 'views/SignupView';

function App() {
  return (
    <>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPageView />
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
        </Switch>
      </Container>
    </>
  );
}

export default App;
