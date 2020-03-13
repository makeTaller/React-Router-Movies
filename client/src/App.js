import React, { useState } from 'react';
import { Route } from "react-router-dom";
import Movie from "./Movies/Movie" 
import MovieList from "./Movies/MovieList" 

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
	    <div>
		    <Route path="/MovieList" component={MovieList}/>
		    <Route path="./Movies/:id" component={Movie}/>
	    </div>
    </div>
  );
};

export default App;
