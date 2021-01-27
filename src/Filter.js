import React, { useState } from "react";

const Filter = ({ data }) => {
  const depts = {};
  const ages = {};
  data.forEach((datum) => {

  })
  return (
    <div className="filter">
      <form>
        <label>
          Filter By Department:
          <select>
            <option value="all">All</option>
            <option value="music">Music</option>
            <option value="film">Film</option>
            <option value="sports">Sports</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form>
        <label>
          Filter By Age:
          <select>
            <option value="all">All</option>
            <option value="30-">Under 30</option>
            <option value="30-40">30-40</option>
            <option value="40+">Over 40</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Filter;
