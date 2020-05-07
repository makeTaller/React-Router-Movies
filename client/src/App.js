import React, {useState} from 'react';
import MovieList from "./Movies/MovieList.js"
import Movie from "./Movies/Movie.js"
import {Route, Link} from 'react-router-dom';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
        {/* <Link to={`/`}> Home </Link> */}
      <SavedList list={savedList} />
      <div><Route exact path="/" component={MovieList}/></div>
      <div><Route path="/movie/:id" component={Movie}/></div>
    </div>
  );
};

export default App;
