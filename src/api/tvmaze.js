// src/api/tvmaze.js

// Fetch all shows by page
export const getAllShows = async (page) => {
  const res = await fetch(`https://api.tvmaze.com/shows?page=${page}`);
  return res.json();
};

// Search shows by name
export const searchShows = async (query) => {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const data = await res.json();
  return data.map(item => item.show);
};

// Get details of a single show by ID
export const getShowDetails = async (id) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  return res.json();
};
