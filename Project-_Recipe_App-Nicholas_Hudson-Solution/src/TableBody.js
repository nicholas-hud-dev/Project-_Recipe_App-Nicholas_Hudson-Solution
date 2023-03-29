import React from 'react'

export default function TableBody({ recipes, deleteRecipe }) {
    const tableBody = recipes.map((recipe, index) => {

    return (
      <div>
      <tr  key={index}>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td>
              <img src={recipe.photo} />
            </td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
            <td>
            <button name='delete' onClick={ () => deleteRecipe(index)} >Delete</button>
            </td>
      </tr>
      </div>
      )
  })
  return tableBody
}