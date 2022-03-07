import React from 'react'
import { useEffect } from 'react'

function RecipeDetails({recipe}) {

    useEffect(()=>{
        console.log(recipe.ingredientLines)
    },[])
  return (
    <div>
        {recipe.ingredients.map((ingredient) => {
        
            return(
                <p>{ingredient.text}</p>
            )
        })}
    </div>
  )
}

export default RecipeDetails