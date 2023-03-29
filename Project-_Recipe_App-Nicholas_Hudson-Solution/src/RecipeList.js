import React from "react";
import TableBody from "./TableBody"

function RecipeList({ recipes , setRecipes }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
     
const deleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((recipe, i) => i !== index);
    setRecipes(updatedRecipes);
  };
  


    
  

  return (
<div className="recipe-list">
      <table className="body">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <TableBody recipes={recipes} deleteRecipe={deleteRecipe}/>
        </tbody>
      </table>
      </div>
  )

}

export default RecipeList;
