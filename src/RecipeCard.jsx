import React from 'react';

const RecipeCard = ({recipe}) => {
  
  const object = recipe.recipe
 
    return   (
    <div className='RecipeCard'>
        <img src = {object.image} alt = {object.label}/>
        
        <h2>{object.label}</h2>
         <p> {
          object.dietLabels.map ((label) => (
            <span>{label} </span> ))
      
        }
          {object.cuisineType}</p>
        <div className='card-stats-container'>
        <div className="card-stats">
          <h2 class="stats-heading">
            Ingredients
          </h2>
          <p class="stats-para">
            {object.ingredients.length}
          </p>
    </div>
    <div className="card-stats">
          <h2 class="stats-heading">
            Servings
          </h2>
          <p class="stats-para">
            {object.yield}
          </p>
        
        </div>
       
        
        
    </div>
   <a href={object.url}><button className="btn">Read More</button></a>

    </div>
    )}

export default RecipeCard;
 