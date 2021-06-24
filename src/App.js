import './App.css';
import { useState } from 'react';
import RecipeWindow from './components/RecipeWindow';

function App() {
  const YOUR_APP_KEY = 'd91f6294f4f95dbc30f9b8cf090964ff';
  const YOUR_APP_ID = 'd3cabe04';
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
  const getRecipes = async () => {
    const resp = await fetch(url);
    const data = await resp.json();

    // console.log(data.hits);
    setRecipes(data.hits);
  };

  const submitHandler = function (event){
    event.preventDefault();
    getRecipes();
  };

  return (
    <div className="App">
      <h1>
        Recipe Search Arena
      </h1>
      {/* Search Form */}
      <form className= "form-handler" onSubmit = {submitHandler}>
        <input type = "text" 
        placeholder= "Search main ingredient to get magic recipes" 
        className= "input-search"
        value = {query}
        onChange= {(event) => setQuery(event.target.value)}/>
        <input type= "submit" value="Submit" className = "btnSubmit"/>
      </form>
      {/* recipes-> prop-name; {recipes}-> list of recipes */}
      <RecipeWindow recipes = {recipes} />
    </div>
  );
}

export default App;
