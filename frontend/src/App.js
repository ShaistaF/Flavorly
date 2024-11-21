import React from 'react';
import RecipeList from './components/RecipeList';
import BlogList from './components/BlogList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Flavorly</h1>
      <SearchBar />
      <RecipeList />
      <BlogList />
    </div>
  );
}

export default App;
