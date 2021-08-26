import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import DataHandler from './DataHandler';
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import UsersPage from "./components/UsersPage";
import UserPage from "./components/UserPage";
import LibrarianPage from "./components/LibrarianPage";



const App = () => {

  const [checkouts, setCheckouts] = useState([]);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [didUpdate, setDidUpdate] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const dataHandler = new DataHandler();
    dataHandler.getCheckouts()
    .then((data) => setCheckouts(data))
    .then(() => dataHandler.getBooks())
    .then((data) => setBooks(data))
    .then(() => setIsLoading(false));
  }, [didUpdate])

  return (
    <div className="container-fluid p-0">
      <Navbar />
      <main className="container-fluid p-0">
        <Switch>
          <Route exact path="/">
            <HomePage books={books} />
          </Route>
          <Route exact path="/users">
            <UsersPage />
          </Route>
          <Route exact path="/users/:userid">
            <UserPage books={books} checkouts={checkouts} isLoading={isLoading}/>
          </Route>
          <Route exact path="/librarian">
            <LibrarianPage books={books} checkouts={checkouts} />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
