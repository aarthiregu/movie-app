import { useState, useEffect } from "react";

export default function Home() {
  const [shows, setShows] = useState([]); // all shows fetched
  const [searchTerm, setSearchTerm] = useState(""); // for search input
  const [currentPage, setCurrentPage] = useState(1); // pagination
  const itemsPerPage = 25; // 5 rows x 5 items

  // Fetch shows from TVMaze API
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setShows(data))
      .catch((err) => console.error("Failed to fetch shows:", err));
  }, []);

  // Filter shows based on search
  const filteredShows = shows.filter((show) =>
    show.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculation
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredShows.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredShows.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search shows..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset to first page on search
          }}
          className="w-full md:w-1/2 p-2 border rounded shadow"
        />
      </div>

      {/* Show Grid */}
      <div className="grid grid-cols-5 gap-4">
        {currentItems.map((show) => (
          <div key={show.id} className="bg-gray-200 p-2 rounded">
            {show.image?.medium ? (
              <img
                src={show.image.medium}
                alt={show.name}
                className="w-full h-auto rounded"
              />
            ) : (
              <div className="w-full h-40 bg-gray-400 flex items-center justify-center text-white">
                No Image
              </div>
            )}
            <p className="text-center mt-2 font-medium">{show.name}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6 flex-wrap">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-3 py-1 rounded ${
              currentPage === number
                ? "bg-blue-500 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
