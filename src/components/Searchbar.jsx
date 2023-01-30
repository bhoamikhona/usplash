import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            className="search-form-input"
            placeholder="search"
          />
          <button type="submit" className="search-submit-btn">
            <FaSearch />
          </button>
        </form>
      </section>
    </main>
  );
};

export default Searchbar;
