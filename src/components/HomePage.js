import React, { useState, useEffect } from 'react';
import BooksAll from "./BooksAll";


const HomePage = (props) => {

  return(
      <section className="justify contents center">
        <h1>Welcome to the SDI Library</h1>
        <BooksAll />
      </section>
  )
}

export default HomePage