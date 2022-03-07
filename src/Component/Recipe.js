import React, { useState } from 'react'
import RecipeDetails from './RecipeDetails'

function Recipe({recipe}) {
    console.log(recipe)
    const [isClicked, setIsClicked] = useState(false)
  return (
    <div onClick={() => setIsClicked((p) => !p)}>
          
         <img className='recipe-img' src={recipe.recipe.image} alt="recipe-image" />
         <p>{recipe.recipe.label}</p>
         {isClicked && <RecipeDetails recipe={recipe.recipe}/>}
         
    </div>
  )
}

export default Recipe