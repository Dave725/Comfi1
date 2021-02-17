import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./screens/components/Header";
import Footer from "./screens/components/Footer";
import LandingScreen from "./screens/LandingScreen";
import ProductScreen from "./screens/ProductScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <main>
          <Route path="/" component={LandingScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="*" component={NotFoundScreen} />
        </main>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
