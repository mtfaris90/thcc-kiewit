import React from "react";

const Search = ({ selection, setSelection }) => {
  return (
    <div className="search">
      <form>
        <label>
          Search for Employee:
          <input
            type="text"
            name="name"
            value={selection}
            onChange={(e) => {
              setSelection(e.target.value);
            }}
          />
        </label>
      </form>
    </div>
  );
};

export default Search;
