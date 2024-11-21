const express = require('express');
const Recipe = require('../models/Recipe');
const { filterRecipes } = require('../utils/filters');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { ingredients, timeOfDay, healthGoal } = req.query;
    const recipes = await Recipe.find();
    const filteredRecipes = filterRecipes(recipes, { ingredients, timeOfDay, healthGoal });
    res.json(filteredRecipes);
  } catch (error) {
    res.status(500).json({ message: 'Error performing search', error });
  }
});

module.exports = router;
