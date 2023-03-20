import {useState, useEffect} from 'react';
import RecipeCard from './RecipeCard';
import SearchIcon from './search.svg';
import BookmarkIcon from './bookmark.svg';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const initSaved = () => {
    let saved = []
    const localSaved = localStorage.getItem('saved');
    if (localSaved != null) saved = JSON.parse(localSaved);
    return saved;
  }
  const [saved, setSaved] = useState(initSaved);
 

  useEffect(() => {
    searchRecipes('Chocolate');

  }, []);
  useEffect(() => {
    localStorage.setItem('saved', JSON.stringify(saved));
  }, [saved]);

  
  const API_URL = `https://api.edamam.com/search?q=`;
 
  const searchRecipes = async (food) => {
    const response = await fetch(`${API_URL}${food}&app_id=c3150934&app_key=352f78ba754a189a5e7b5b9884b60312`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(recipes)
    
  }

    return (
   
    <div className='app'>
       <header className="header">
       <div className="logo">
         <img decoding="async" src={require('./CookBoostLogo.png')} alt="Logo Image"/>
      </div>
      <nav>
        
        
        <ul className="nav-links">
          <li href="#saved">Saved</li>

        </ul>
      </nav>
      <div class="wrap">
         <div class="search">
            <input type="text" class="searchTerm" placeholder="Type in an ingredient to find recipes!" value={searchTerm} onChange={
          ((e) => {setSearchTerm(e.target.value)})}/>
            <button onClick={() => {searchRecipes(searchTerm)}} type="submit" class="searchButton">
            <img
        src={SearchIcon}
        alt='search'
        onClick={() => {searchRecipes(searchTerm)}}/>
           </button>
         </div>
      </div>
  </header>
  
  <h2 id="saved">Saved Recipes</h2>
       
       {
        saved?.length > 0 ? (
          <div className="container">
       
          {saved.map ((saved) =>(
            <div className='Recipe'>
            <RecipeCard recipe={saved} />
          
            </div>
          ) )}
          </div>
        ) : (
          <div className='empty'>
            <p>No Recipes found</p>
          </div>
        )
        
      }
      <h2>Suggested Recipes</h2>
      {
        recipes?.length > 0 ? (
          <div className="container">
       
          {recipes.map ((recipe) =>(
            <div className='Recipe'>
            <RecipeCard recipe={recipe} />
           
            <button className="like-btn" onClick={() => {setSaved(oldArray => [...oldArray,recipe] )}} ><img src={BookmarkIcon} alt='Bookmark Symbol'/></button>
            </div>
          ) )}
          </div>
        ) : (
          <div className='empty'>
            <p>No Saved Yet</p>
          </div>
        )
        
      }
      
     </div>

 
  );
}

export default App;
