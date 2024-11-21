import React, { useState, useEffect } from 'react';
import api from '../services/api';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await api.getRecipes();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold">Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
