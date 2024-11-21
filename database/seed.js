const mongoose = require('mongoose');
const Recipe = require('../backend/models/Recipe');
const Blog = require('../backend/models/Blog');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Seeding database...");
    await Recipe.create([{ title: "Spaghetti", ingredients: ["Pasta", "Tomato Sauce"], steps: ["Boil pasta", "Add sauce"] }]);
    await Blog.create([{ title: "Cooking Tips", content: "Always taste your food.", author: "Chef John" }]);
    console.log("Database seeded.");
    mongoose.disconnect();
  })
  .catch(err => console.error(err));
