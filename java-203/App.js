
import './App.css';
import React, { useState } from 'react';

const App= ()=> {
  const [search,setSearch] =useState('');
  const YOUR_APP_ID ="6fbd69c1";
  const YOUR_APP_KEY ="6a0c6cc0b888e5b99141fa3e6d7e2deb";
  const submitHandler =e=>{
    e.preventDefault();
    fetch('https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free')
    .then(
      response => response.json()
    ).then(data => console.log(data))
    
  }
  return (
    <div className="App">
      <h1>Search Your Favorite Movie</h1>
      <form onSubmit={submitHandler}>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/><br /><br />
        <input type="submit" value="search"/>
      </form>
    </div>
  );
}

export default App;
