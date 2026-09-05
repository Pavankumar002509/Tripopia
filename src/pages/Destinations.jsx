// Import useState for managing search functionality
import { useState } from "react";

// Import useSearchParams for storing page and search values in the URL
import { useSearchParams } from "react-router-dom";

// Import destination data
import destinations from "../data/destinations";

// Import reusable destination card component
import DestinationCard from "../components/DestinationCard";

// Import page CSS
import "./Destinations.css";

function Destinations() {

  // Get and update URL search parameters
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the current search value from the URL
  const searchValue = searchParams.get("search") || "";

  // Get the current page from the URL
  const currentPage = Number(searchParams.get("page")) || 1;

  // Number of destinations displayed on each page
  const destinationsPerPage = 6;

  // Filter destinations based on search value
  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    destination.country.toLowerCase().includes(searchValue.toLowerCase()) ||
    destination.category.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(
    filteredDestinations.length / destinationsPerPage
  );

  // Calculate the first destination index
  const startIndex = (currentPage - 1) * destinationsPerPage;

  // Get destinations for the current page
  const currentDestinations = filteredDestinations.slice(
    startIndex,
    startIndex + destinationsPerPage
  );

  // Handle search input changes
  const handleSearch = (event) => {

    // Get the search value entered by the user
    const value = event.target.value;

    // Update search and reset pagination to page 1
    setSearchParams({
      search: value,
      page: 1,
    });
  };

  // Change the current page
  const changePage = (page) => {

    // Keep the search value while changing the page
    setSearchParams({
      search: searchValue,
      page,
    });

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="destinations-page">

      {/* Page hero */}
      <section className="destinations-hero">

        <p>EXPLORE AMAZING PLACES</p>

        <h1>Find Your Perfect Destination</h1>

        <span>
          From peaceful beaches to exciting cities, discover your next journey.
        </span>

      </section>

      {/* Main destinations content */}
      <section className="destinations-content">

        {/* Search section */}
        <div className="destination-search">

          {/* Search input */}
          <input
            type="text"
            placeholder="Search by destination, country or category..."
            value={searchValue}
            onChange={handleSearch}
          />

          {/* Search result count */}
          <p>
            {filteredDestinations.length} destinations found
          </p>

        </div>

        {/* Destination cards */}
        {currentDestinations.length > 0 ? (

          <div className="destinations-grid">

            {/* Render destination cards using list rendering */}
            {currentDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}

          </div>

        ) : (

          /* Conditional rendering when no destination is found */
          <div className="no-results">

            <h2>No Destinations Found 😔</h2>

            <p>
              Try searching for another destination or category.
            </p>

          </div>

        )}

        {/* Pagination */}
        {totalPages > 1 && (

          <div className="pagination">

            {/* Previous button */}
            <button
              disabled={currentPage === 1}
              onClick={() => changePage(currentPage - 1)}
            >
              ← Previous
            </button>

            {/* Page number buttons */}
            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (

              <button
                key={page}
                className={currentPage === page ? "active-page" : ""}
                onClick={() => changePage(page)}
              >
                {page}
              </button>

            ))}

            {/* Next button */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => changePage(currentPage + 1)}
            >
              Next →
            </button>

          </div>

        )}

      </section>

    </div>
  );
}

export default Destinations;