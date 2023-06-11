import React, { useState } from "react";

function SortFilter() {
  // State for sorting
  const [sortBy, setSortBy] = useState("name");

  // State for filtering
  const [filterBy, setFilterBy] = useState("");

  // Function to handle sorting
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Function to handle filtering
  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  // Array of items with various categories
  const items = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Banana", category: "Fruit" },
    { id: 3, name: "Carrot", category: "Vegetable" },
    { id: 4, name: "Broccoli", category: "Vegetable" },
    { id: 5, name: "Orange", category: "Fruit" },
    { id: 6, name: "Tomato", category: "Vegetable" },
    { id: 7, name: "Grapes", category: "Fruit" },
    { id: 8, name: "Potato", category: "Vegetable" },
    { id: 9, name: "Strawberry", category: "Fruit" },
    { id: 10, name: "Cucumber", category: "Vegetable" },
    { id: 11, name: "Chocolate", category: "Sweets" },
    { id: 12, name: "Cheese", category: "Dairy" },
    { id: 13, name: "Bread", category: "Bakery" },
    { id: 14, name: "Chicken", category: "Meat" },
    { id: 15, name: "Rice", category: "Grains" },
  ];

  // Filter the items based on the filter input value
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filterBy.toLowerCase())
  );

  // Sort the filtered items based on the selected sorting option
  const sortedItems = filteredItems.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div>
        <label htmlFor="sort">Sort By:</label>
        <select id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
      </div>
      <div>
        <label htmlFor="filter">Filter By:</label>
        <input
          type="text"
          id="filter"
          value={filterBy}
          onChange={handleFilterChange}
        />
      </div>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SortFilter;
