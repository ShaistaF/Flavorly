import React, { useState } from 'react';
import api from '../services/api';

function RecipeForm() {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    steps: '',
    timeOfDay: '',
    healthGoal: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ingredientsArray = recipe.ingredients.split(',').map((item) => item.trim());
      const stepsArray = recipe.steps.split('\n').map((step) => step.trim());
      await api.addRecipe({ ...recipe, ingredients: ingredientsArray, steps: stepsArray });
      alert('Recipe added successfully!');
    } catch (error) {
      alert('Error adding recipe. Please try again.');
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Recipe Title"
        value={recipe.title}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
      />
      <textarea
        name="ingredients"
        placeholder="Ingredients (comma-separated)"
        value={recipe.ingredients}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
      />
      <textarea
        name="steps"
        placeholder="Steps (one per line)"
        value={recipe.steps}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
      />
      <select
        name="timeOfDay"
        value={recipe.timeOfDay}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
      >
        <option value="">Time of Day</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
      <select
        name="healthGoal"
        value={recipe.healthGoal}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
      >
        <option value="">Health Goal</option>
        <option value="low-carb">Low Carb</option>
        <option value="high-protein">High Protein</option>
        <option value="vegan">Vegan</option>
      </select>
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={recipe.imageUrl}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
      />
      <button type="submit" className="button-primary">
        Add Recipe
      </button>
    </form>
  );
}

export default RecipeForm;
