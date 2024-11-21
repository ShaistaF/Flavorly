const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  steps: [String],
  timeOfDay: String,
  healthGoal: String,
  imageUrl: String,
});

module.exports = mongoose.model('Recipe', recipeSchema);
