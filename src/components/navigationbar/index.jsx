import "./style.css";
import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../store/action";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSearch = (searchQuery) => {
    dispatch(setSearchQuery(searchQuery));
  };
  return (
    <>
      <nav>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => handleSearch(e.target.value)}
          />
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        <div>
          Relevance <i className="fa-solid fa-chevron-down"></i>
        </div>
        <div>
          All Brands <i className="fa-solid fa-chevron-down"></i>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
