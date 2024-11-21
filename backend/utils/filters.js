function filterRecipes(recipes, { ingredients, timeOfDay, healthGoal }) {
    return recipes.filter(recipe => {
      return (!ingredients || ingredients.every(ing => recipe.ingredients.includes(ing))) &&
             (!timeOfDay || recipe.timeOfDay === timeOfDay) &&
             (!healthGoal || recipe.healthGoal === healthGoal);
    });
  }
  
  module.exports = { filterRecipes };
  