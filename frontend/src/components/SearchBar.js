import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchParams, setSearchParams] = useState({
    ingredients: '',
    timeOfDay: '',
    healthGoal: '',
  });

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form className="flex flex-col gap-4 mb-4" onSubmit={handleSearch}>
      <input
        type="text"
        name="ingredients"
        placeholder="Search by ingredients (comma-separated)"
        value={searchParams.ingredients}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
      />
      <select
        name="timeOfDay"
        value={searchParams.timeOfDay}
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
        value={searchParams.healthGoal}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
      >
        <option value="">Health Goal</option>
        <option value="low-carb">Low Carb</option>
        <option value="high-protein">High Protein</option>
        <option value="vegan">Vegan</option>
      </select>
      <button type="submit" className="button-primary">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
