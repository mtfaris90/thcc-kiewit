import React from "react";
import EmployeeList from "./EmployeeList";
import Search from "./Search";

function App() {
  return (
    <div className="app">
        Employee List
      <Search />
      <EmployeeList />
    </div>
  );
}
export default App;
