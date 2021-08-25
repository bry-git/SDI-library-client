import React, { useState, useEffect } from 'react';
import BooksAll from "./BooksAll";
import DataHandler from '../DataHandler';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const dataHandler = new DataHandler();
    dataHandler.getBooks().then((data) => setBooks(data)).then(() => setIsLoading(false));
  }, [])

  return(
      <>
      <BooksAll />
      </>
  )
}

export default HomePage