import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("")
  const handleNameChange = (event) => setName(event.target.value);

  const [cuisine, setCuisine] = useState("")
  const handleCuisineChange = (event) => setCuisine(event.target.value);

  const [photo, setPhoto] = useState("")
  const handlePhotoChange = (event) => setPhoto(event.target.value);

  const [ingredients, setIngredients] = useState("")
  const handleIngredientsChange = (event) => setIngredients(event.target.value);

  const [preparation, setPreparation] = useState("")
  const handlePreparationChange = (event) => setPreparation(event.target.value);

    const submitHandler = (e) => {
    e.preventDefault()
    //handleNameChange()
      const newRecipe = {
      name: name,
      cuisine: cuisine,
      photo: photo,
      ingredients: ingredients,
      preparation: preparation,  
    }
      setRecipes([...recipes, newRecipe]);
  setName("");
  setCuisine("");
  setPhoto("");
  setIngredients("");
  setPreparation("");
  }
  
  return (
    <form onSubmit={submitHandler} name="create">
      <table>
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
          <tr>
            <td className="narrow">
              <input value={name} onChange={handleNameChange} name="name" />
            </td>
             <td>
              <input className="narrow" value={cuisine} onChange={handleCuisineChange} name="cuisine" />
            </td>
             <td>
              <input className="narrow" value={photo} onChange={handlePhotoChange} name="photo" />
            </td>
             <td>
              <textarea className="wide" value={ingredients} onChange={handleIngredientsChange} name="ingredients" />
            </td>
             <td>
              <textarea className="wide" value={preparation} onChange={handlePreparationChange} name="preparation" />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
