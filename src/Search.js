import React from "react";

const Search = () => {
  return (
    <div className="search">
      <form>
        <label>
          Search for Employee:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Search;
