import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import UsersPage from "./components/UsersPage";
import UserPage from "./components/UserPage";
import LibrarianPage from "./components/LibrarianPage";

const App = () => {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <main className="container-fluid p-0">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/users">
            <UsersPage />
          </Route>
          <Route exact path="/users/:userid">
            <UserPage />
          </Route>
          <Route exact path="/librarian">
            <LibrarianPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
