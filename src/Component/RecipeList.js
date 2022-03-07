import React, { useState } from 'react'
import { useEffect } from 'react'
import Recipe from './Recipe'

function RecipeList({recipesData}) {

    const [num, setNum] = useState(0)
    const totalImage = recipesData?.length

    useEffect(() => {
        console.log(num)
        const interval = setInterval(() => {
            (num === totalImage-1) ? setNum(0) : setNum((p)=>(p+1));
            // if(num <= totalImage){
            //     setNum(num+1)
            // }else{
            //     setNum(0)
            // }
        }, 3000);
        return () => clearInterval(interval);
      }, [num]);
 
  return (
    <div className="recipe-container">

        {recipesData && <Recipe recipe={recipesData[num]} />}
     
    {/* {recipesData?.map((recipe, index)=> {
      return(
        
        <Recipe key={index} recipe={recipe} />
      )
    })}  */}
    
    </div>
  )
}

export default RecipeList