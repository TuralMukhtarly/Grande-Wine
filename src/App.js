import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header, Footer } from './components/index';
import { Catalog, Cart, AuthPage, HomePage, Presents, Contacts, Company } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" render={() => <HomePage />} exact />
          <Route path="/catalog" render={() => <Catalog />} exact />
          <Route path="/presents" render={() => <Presents />} exact />
          <Route path="/company" render={() => <Company />} exact />
          <Route path="/contacts" render={() => <Contacts />} exact />

          <Route path="/cart" render={() => <Cart />} exact />
          <Route path="/auth" render={() => <AuthPage />} exact />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
