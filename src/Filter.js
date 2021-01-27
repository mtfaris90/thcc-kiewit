import React from "react";

const Filter = ({ setDept, setAge }) => {
  return (
    <div className="filter">
      <form>
        <label>
          Filter By Department:
          <select value="all" onChange={(e) => setDept(e.target.value)}>
            <option value="all">All</option>
            <option value="music">Music</option>
            <option value="film">Film</option>
            <option value="sports">Sports</option>
          </select>
        </label>
      </form>
      <form>
        <label>
          Filter By Age:
          <select value="all" onChange={(e) => setAge(e.target.value)}>
            <option value="all">All</option>
            <option value="u30">Under 30</option>
            <option value="u40">30-40</option>
            <option value="40o">Over 40</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Filter;
