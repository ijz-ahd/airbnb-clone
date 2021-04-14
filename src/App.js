import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>

      {/* header */}

      {/* banner */}

      {/* cards */}

      {/* footer */}

      {/* search page  */}
    </div>
  );
}

export default App;
