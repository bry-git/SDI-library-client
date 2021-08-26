import React, { useState, useEffect } from 'react';
import BooksAll from "./BooksAll";

const HomePage = (props) => {

  return(
      <section className="row justify-content-center">
        <div className="col-10 ">
        <h1 className="text-center">Welcome to the SDI Library</h1>
        <p className="text-center">Please select if you are a user or librarian to continue using the library</p>
        <BooksAll books={props.books} />
        </div>
      </section>
  )
}

export default HomePage